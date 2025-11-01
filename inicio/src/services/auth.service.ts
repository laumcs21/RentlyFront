// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
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
      .post<AuthResponse>(this.url('/auth/login'), dto)
      .pipe(tap(res => res?.token && this.storeToken(res.token)));
  }
}

