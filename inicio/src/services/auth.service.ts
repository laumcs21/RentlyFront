// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, tap } from 'rxjs';
import { AuthResponse, LoginDto, RegisterDto } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly base = environment.apiUrl; // '' en dev → usa proxy
  private readonly KEY = 'token';

  constructor(private http: HttpClient) {}

  private storeToken(token: string) { localStorage.setItem(this.KEY, token); }
  getToken() { return localStorage.getItem(this.KEY); }
  logout() { localStorage.removeItem(this.KEY); }
  isLoggedIn() { return !!this.getToken(); }

  private url(path: string) { return this.base ? `${this.base}${path}` : path; }

  register(dto: RegisterDto): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(this.url('/auth/register'), dto)
      .pipe(tap(res => res?.token && this.storeToken(res.token)));
  }

login(dto: LoginDto): Observable<AuthResponse> {
  return this.http
    .post<AuthResponse>(this.url('/auth/login'), dto, { observe: 'response' })
    .pipe(
      tap(res => {
        const body = res.body as any;
        // token en el cuerpo (varios nombres posibles)
        let token =
          body?.token ?? body?.accessToken ?? body?.jwt ?? null;

        // o token en la cabecera Authorization
        const auth = res.headers.get('Authorization'); // "Bearer x.y.z" o "x.y.z"
        if (!token && auth) token = auth.startsWith('Bearer ') ? auth.slice(7) : auth;

        if (token) this.storeToken(token);
        else console.warn('[AuthService] login: no llegó token ni en body ni en headers');
      })
    ) as any;
}
}

