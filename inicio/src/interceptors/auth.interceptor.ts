// src/app/core/interceptors/auth.interceptor.ts
import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environment/environment';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private auth = inject(AuthService);

  private isAuthPath(url: string): boolean {
    // Deja pasar TODO lo que sea de auth (login, register, refresh, etc.)
    return url.includes('/auth/');
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAbsolute = /^https?:\/\//i.test(req.url);
    const useProxy  = req.url.startsWith('/'); // ej: "/auth/login", "/usuarios/1/foto-perfil"

    // 1) No prefijes nada si usas proxy o si ya es absoluta
    //    Sólo si pusieras environment.apiUrl (prod), lo aplicas.
    let url = req.url;
    if (!isAbsolute && !useProxy && environment.apiUrl) {
      const base = environment.apiUrl.replace(/\/+$/, '');
      url = `${base}/${req.url.replace(/^\/+/, '')}`;
    }

    let authReq = req.clone({ url });

    // 2) No agregues Authorization a rutas de auth
    if (!this.isAuthPath(authReq.url)) {
      const token = this.auth.getToken();
      if (token) {
        authReq = authReq.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
      }
    }

    // 3) Manejo de 401
    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) this.auth.logout();
        return throwError(() => err);
      })
    );
  }
}

