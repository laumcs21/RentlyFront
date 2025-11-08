import { Component } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { ListingsService } from '../../../../services/listings.service';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ReservationsService } from '../../../../services/reservations.service';

@Component({
  selector: 'ad-host-dashboard-page',
  templateUrl: './host-dashboard.page.html',
  styleUrls: ['./host-dashboard.page.css'],
  standalone: false
})
export class HostDashboardPage {
  me$: Observable<any>;
  misAlojamientos$: Observable<any[]>;
  reservasPendientes: any[] = [];
  totalAlojamientos$: Observable<number>;
  reservasProximas$ = of(3);
  ingresosEstimados$ = of(1_250_000);

  constructor(
    private users: UsersService,
    private listings: ListingsService,
    private reservas: ReservationsService
  ) {
    this.me$ = this.users.getMe();

    this.misAlojamientos$ = this.me$.pipe(
      switchMap(me => this.listings.getByHost(me.idAnfitrion || me.id)),
      catchError(() => of([]))
    );

    this.totalAlojamientos$ = this.misAlojamientos$.pipe(
      map((xs: any[]) => xs.length)
    );

    this.users.getMe(true).subscribe({
      next: (me) => {
        if (!me) return;
    const hostId = me.id;
          this.reservas.getByHost(hostId, 'PENDIENTE').subscribe({
          next: (resp: any) => {
            this.reservasPendientes = resp?.content ?? resp ?? [];
          },
          error: () => {
            this.reservasPendientes = [];
          }
        });
      }
    });
  }

  editar(id: number) {
    console.log('editar alojamiento', id);
  }

  verReservas(id: number) {
    console.log('ver reservas de alojamiento', id);
  }

  publicar() {
    console.log('publicar nuevo alojamiento');
  }

 aprobarReserva(reservaId: number, anfitrionId: number) {
  this.reservas.aprobar(anfitrionId, reservaId).subscribe({
    next: () => {
      // volver a cargar
      this.reservas.getByHost(anfitrionId, 'PENDIENTE').subscribe(r => {
        this.reservasPendientes = r?.content ?? r ?? [];
      });
    },
    error: (err) => console.error('no se pudo aprobar', err)
  });
}


  rechazarReserva(reservaId: number, anfitrionId: number) {
    this.reservas.rechazar(anfitrionId, reservaId, 'No disponible').subscribe({
      next: () => {
        this.reservasPendientes = this.reservasPendientes.filter(r => r.id !== reservaId);
      },
      error: err => console.error('no se pudo rechazar', err)
    });
  }
}
