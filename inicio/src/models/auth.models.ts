// src/app/core/services/auth.models.ts
export enum Rol {
  USUARIO   = 'USUARIO',
  ANFITRION = 'ANFITRION',
  ADMINISTRADOR = 'ADMINISTRADOR'
}

export interface RegisterDto {
  nombre: string;
  email: string;
  telefono: string;
  contrasena: string;                 // el back espera 'contrasena' en tus DTOs de persona
  fechaNacimiento?: string | null;    // YYYY-MM-DD
  rol: Rol;                           // 'USER' | 'HOST' ...
}

export interface LoginDto {
  email: string;
  password: string;                   // el back espera 'password'
}

export interface AuthResponse {
  token: string;
  nombre: string;
  rol: Rol;
}
