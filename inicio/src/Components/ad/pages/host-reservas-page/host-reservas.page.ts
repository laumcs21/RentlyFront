// src/components/ad/pages/host-reservas-page/host-reservas.page.ts
import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../../../services/reservations.service';
import { UsersService } from '../../../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ad-host-reservas-page',
  templateUrl: './host-reservas.page.html',
  styleUrls: ['./host-reservas.page.css'],
  standalone: false
})
export class HostReservasPage implements OnInit {
  hostId!: number;
  loading = true;
  reservas: any[] = [];
  filtroEstado = 'TODAS'; // 'TODAS' | 'PENDIENTE' | 'CONFIRMADA' | 'RECHAZADA'

  constructor(
    private reservasSrv: ReservationsService,
    private usersSrv: UsersService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    // saco el host actual
    this.usersSrv.getMe().subscribe(me => {
      this.hostId = me.id; // en tu caso este es el que sí existe
      this.cargar();
    });
  }

  cargar(): void {
    this.loading = true;
    const estado = this.filtroEstado !== 'TODAS' ? this.filtroEstado : undefined;
    this.reservasSrv.getByHost(this.hostId, estado).subscribe({
      next: (resp: any) => {
        // tu controller devuelve Page<ReservaDTO>, así que puede venir como {content:[]}
        this.reservas = resp?.content ?? resp ?? [];
        this.loading = false;
      },
      error: () => {
        this.reservas = [];
        this.loading = false;
      }
    });
  }

  cambiarFiltro(est: string) {
    this.filtroEstado = est;
    this.cargar();
  }

  aprobar(r: any) {
    this.reservasSrv.aprobar(this.hostId, r.id).subscribe({
      next: () => {
        this.snack.open('Reserva aprobada ✅', 'OK', { duration: 2500 });
        this.cargar();
      },
      error: err => {
        console.error(err);
        this.snack.open('No se pudo aprobar', 'Cerrar', { duration: 2500 });
      }
    });
  }

  rechazar(r: any) {
    const motivo = prompt('Motivo de rechazo:') || 'Sin motivo';
    this.reservasSrv.rechazar(this.hostId, r.id, motivo).subscribe({
      next: () => {
        this.snack.open('Reserva rechazada', 'OK', { duration: 2500 });
        this.cargar();
      },
      error: err => {
        console.error(err);
        this.snack.open('No se pudo rechazar', 'Cerrar', { duration: 2500 });
      }
    });
  }

  // para mostrar solo las que se pueden aprobar
  esPendiente(r: any) {
    return r.estado === 'PENDIENTE';
  }
}
