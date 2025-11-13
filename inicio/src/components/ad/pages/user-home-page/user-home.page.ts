import { Component } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { ListingsService } from '../../../../services/listings.service';
import { Subject } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'ad-user-home-page',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.css'], 
  standalone: false
})
export class UserHomePage {
  me$;
  cards$;
  precioMax = 3000000;
  servicios = new Set<string>();
  private apply$ = new Subject<void>();

  constructor(
    private users: UsersService,
    private listings: ListingsService,
    private router: Router

  ) {
    this.me$ = this.users.getMe();

    this.cards$ = this.apply$.pipe(
      startWith(void 0),
      switchMap(() => this.listings.getFeatured({
        precioMax: this.precioMax,
        servicios: [...this.servicios]
      }, 12))
    );
  }

  toggleServicio(s: string) {
    this.servicios.has(s) ? this.servicios.delete(s) : this.servicios.add(s);
  }

  aplicar() { this.apply$.next(); }

  setPrecioMax(value: number) {
    this.precioMax = value;
  }

  goToDetail(id: number) { this.router.navigate(['/listing', id]); }
  trackById = (_: number, it: { id: number }) => it.id;

}
