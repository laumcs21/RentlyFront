import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `<ad-auth-form (login)="onLogin($event)"></ad-auth-form>`,
  standalone: false
})
export class LoginPage {
  onLogin(data: { email: string; password: string }) {
    console.log('Login ->', data);
  }
}
