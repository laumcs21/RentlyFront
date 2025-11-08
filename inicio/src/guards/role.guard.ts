import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private users: UsersService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const allowed = route.data?.['roles'] as string[] | undefined;

    return this.users.getMe().pipe(
      map(me => {
        if (!me) { this.router.navigateByUrl('/login'); return false; }
        if (!allowed || allowed.includes(me.rol)) return true;

        this.router.navigateByUrl(me.rol === 'ANFITRION' ? '/host/home' : '/');
        return false;
      }),
      catchError(() => {
        this.router.navigateByUrl('/login');
        return of(false);
      })
    );
  }
}

