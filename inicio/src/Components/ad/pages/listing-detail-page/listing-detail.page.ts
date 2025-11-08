import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../../../../services/listings.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { ReservationsService } from '../../../../services/reservations.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ad-listing-detail-page',
  templateUrl: './listing-detail.page.html',
  styleUrls: ['./listing-detail.page.css'],
  standalone: false
})
export class ListingDetailPage {
  model: any;
  loading = true;
  error = '';

  entrada = '';
  salida = '';
  huespedes = 1;
  reservando = false;
  errorReserva = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listings: ListingsService,
    private location: Location,
    private reservas: ReservationsService,
    private snack: MatSnackBar
  ) {
    // cargar alojamiento
    this.route.paramMap.subscribe(pm => {
      const id = Number(pm.get('id'));
      if (!id) {
        this.router.navigateByUrl('/');
        return;
      }

      this.loading = true;
      this.listings.getDetail(id).pipe(
        catchError(err => {
          console.error('getDetail error', err);
          this.error = 'No fue posible cargar el alojamiento.';
          return of(undefined);
        })
      ).subscribe(res => {
        this.model = res
          ? {
              ...res,
              portadaUrl: res.portadaUrl ?? res.imagenes?.[0] ?? 'assets/placeholder.webp'
            }
          : undefined;
        this.loading = false;
      });
    });
  }

reservar() {
  if (!this.model) return;

  // 1. fechas
  if (!this.entrada || !this.salida) {
    this.snack.open('Debes seleccionar entrada y salida', 'Cerrar', { duration: 3000 });
    return;
  }
  if (this.entrada >= this.salida) {
    this.snack.open('La salida debe ser después de la entrada', 'Cerrar', { duration: 3000 });
    return;
  }

  // 2. capacidad
  const capacidad = this.model.capacidadMaxima ?? 1;
  if (this.huespedes > capacidad) {
    this.snack.open(
      `Este alojamiento admite máximo ${capacidad} huésped(es).`,
      'Cerrar',
      { duration: 3000 }
    );
    return;
  }

  // 3. armo dto como lo definiste
  const dto = {
    alojamientoId: this.model.id,
    fechaInicio: this.entrada,
    fechaFin: this.salida,
    numeroHuespedes: this.huespedes
  };

  this.reservando = true;
  this.reservas.crear(dto).subscribe({
    next: () => {
      this.reservando = false;
      this.snack.open('Reserva creada, queda en PENDIENTE', 'OK', { duration: 3000 });
    },
    error: (err) => {
      this.reservando = false;
      console.error(err);
      this.snack.open(err?.error || 'Las fechas no están disonibles', 'Cerrar', { duration: 3000 });
    }
  });
}


  goBack(ev?: Event) {
    ev?.preventDefault();
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/user/home']);
    }
  }

swap(url: any) {
  if (!this.model) return;
  const imgs = this.model.imagenes ?? [];
  const idx = imgs.indexOf(url);
  const actual = this.model.portadaUrl || imgs[0];

  if (idx > -1 && actual) {
    imgs[idx] = actual;
  }

  this.model.portadaUrl = url;
  this.model.imagenes = imgs;
}


}

