// src/app/core/services/users.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../environment/environment';

export type Rol = 'USUARIO' | 'ANFITRION' | 'ADMINISTRADOR';

export interface MeDto {
  id: number;
  nombre: string;
  email: string;
  rol: Rol; 
}

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly base = environment.apiUrl;   // si usas proxy en dev puede ser ''
  private meCache$?: Observable<MeDto>;         // caché en memoria para /me

  constructor(private http: HttpClient) {}

  /** Helper para componer la URL con base cuando exista */
  private url(path: string) {
    return this.base ? `${this.base}${path}` : path;
  }

  /**
   * Obtiene el perfil del usuario autenticado.
   * - Cacheado por defecto (shareReplay(1)).
   * - Pasa refresh=true para forzar refetch (p.ej. justo después de login).
   */
  getMe(refresh = false): Observable<MeDto> {
    if (refresh || !this.meCache$) {
      this.meCache$ = this.http
        .get<MeDto>(this.url('/usuarios/me'))
        .pipe(shareReplay(1));
    }
    return this.meCache$;
  }

  /** Limpia la caché del perfil (úsalo en logout o si editas datos del usuario) */
  clearMeCache() {
    this.meCache$ = undefined;
  }

  uploadProfilePhoto(userId: number, file: File): Observable<{ url: string }> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post<{ url: string }>(
      this.url(`/usuarios/${userId}/foto-perfil`),
      form
    );
  }
}


