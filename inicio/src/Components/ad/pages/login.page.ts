import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `<app-auth-form (login)="onLogin($event)"></app-auth-form>`,
  standalone: false
})
export class LoginPage {
  onLogin(data: { email: string; password: string }) {
    console.log('Login ->', data);
  }
}
