// src/app/core/services/users.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MeDto { id: number; nombre: string; email: string; rol: string; /* …lo que devuelva tu back */ }

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {}

  // Debe existir en tu back (ej: GET /api/usuarios/me)
  getMe(): Observable<MeDto> {
    return this.http.get<MeDto>('/usuarios/me');
  }

  uploadProfilePhoto(userId: number, file: File): Observable<{ url: string }> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post<{ url: string }>(`/usuarios/${userId}/foto-perfil`, form);
  }
}


