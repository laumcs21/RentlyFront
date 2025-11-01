import { Injectable } from '@angular/core';

const TOKEN_KEY = 'rly_token';
const USER_KEY  = 'rly_user';

@Injectable({ providedIn: 'root' })
export class TokenStorage {
  setToken(t: string){ localStorage.setItem(TOKEN_KEY, t); }
  getToken(){ return localStorage.getItem(TOKEN_KEY) ?? ''; }
  clear(){ localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY); }
  setUser(u: unknown){ localStorage.setItem(USER_KEY, JSON.stringify(u)); }
  getUser<T=any>(): T | null {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) as T : null;
  }
}
