import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../../services/auth.service';
import { LoginDto } from '../../../../models/auth.models';
import { UsersService } from '../../../../services/users.service';  

@Component({
  selector: 'ad-login-page',
  template: `<ad-auth-form (login)="onLogin($event)"></ad-auth-form>`,
  standalone: false
})
export class LoginPage {
  constructor(private auth: AuthService, private snack: MatSnackBar, private router: Router, private users: UsersService) {}

onLogin(ev: { email: string; password: string }) {
  console.log('[LoginPage] onLogin', ev);
    const dto: LoginDto = { email: ev.email, password: ev.password }; // ⇦ cambia a contrasena si tu back lo pide
    this.auth.login(dto).subscribe({
      next: () => {
        this.users.getMe(true).subscribe({
          next: (me) => {
            if (me.rol === 'ANFITRION') {
              this.router.navigateByUrl('/host');
            } else {
              this.router.navigateByUrl('/user/home');
            }
          },
          error: () => this.router.navigateByUrl('/login') // fallback
        });
      },
      error: () => this.snack.open('Credenciales inválidas', 'Cerrar', { duration: 3000 })
    });

  }
}

