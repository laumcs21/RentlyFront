import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { UsersService } from '../../../../services/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // <- importa map

@Component({
  selector: 'ad-top-bar-user',
  templateUrl: './top-bar-user.component.html',
  styleUrls: ['./top-bar-user.component.css'],
  standalone: false
})
export class TopbarUserComponent {
  me$!: Observable<any>;        // tipa con tu interfaz de usuario si la tienes
  host$!: Observable<boolean>;

  constructor(
    private auth: AuthService,
    private users: UsersService,
    private router: Router
  ) {
    // <-- aquí ya están inyectados los servicios
    this.me$ = this.users.getMe();
    this.host$ = this.me$.pipe(map(u => this.isHost(u)));
  }

  private isHost(u: any): boolean {
    const r = String(u?.rol || '').toUpperCase();
    // admite "HOST" o "ANFITRION"
    return r === 'HOST' || r === 'ANFITRION';
  }

  action(key: 'perfil'|'reservas'|'favoritos'|'mensajes'|'publicar') {
    console.log('[TopbarUser] acción:', key);
  }

  logout() {
    this.auth.logout();
    this.users.clearMeCache();
    this.router.navigateByUrl('/login');
  }
}
