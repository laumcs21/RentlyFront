import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../../services/auth.service';
import { LoginDto } from '../../../../models/auth.models';

@Component({
  selector: 'ad-login-page',
  template: `<ad-auth-form (login)="onLogin($event)"></ad-auth-form>`,
  standalone: false
})
export class LoginPage {
  constructor(private auth: AuthService, private snack: MatSnackBar, private router: Router) {}

  onLogin(ev: { email: string; password: string }) {
    const dto: LoginDto = { email: ev.email, password: ev.password }; // ⇦ cambia a contrasena si tu back lo pide
    this.auth.login(dto).subscribe({
      next: () => {
        this.snack.open('✅ Sesión iniciada', 'OK', { duration: 2500 });
        this.router.navigateByUrl('/'); // o /dashboard
      },
      error: (e) => {
        const msg = e?.error?.message || 'Credenciales inválidas';
        this.snack.open(`⚠️ ${msg}`, 'Cerrar', { duration: 3500 });
      }
    });
  }
}

