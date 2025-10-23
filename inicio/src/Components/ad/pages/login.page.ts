import { Component } from '@angular/core';
import { AuthForm } from '../organisms/auth-form/auth-form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthForm],
  template: `<app-auth-form (login)="onLogin($event)"></app-auth-form>`,
})
export class LoginPage {
  onLogin(data: { email: string; password: string }) {
    console.log('Login ->', data);
    // aquí luego llamas a tu API de autenticación
  }
}
