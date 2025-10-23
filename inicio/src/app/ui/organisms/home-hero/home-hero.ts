import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
  <section class="hero">
    <div class="left">
      <h1 class="h1">Encuentra tu próximo<br>alojamiento</h1>
      <p class="sub">
        Busca por ciudad, fechas, precio y servicios. Gestiona reservas, deja calificaciones
        y disfruta de una experiencia segura.
      </p>

      <div class="chips">
        <span class="chip">JWT</span>
        <span class="chip">Spring Boot</span>
        <span class="chip">Angular/React</span>
        <span class="chip">MariaDB</span>
        <span class="chip">Mapbox</span>
        <span class="chip">Cloudinary</span>
      </div>
    </div>

    <div class="right">
      <div class="mock">
        ILUSTRACIÓN<br><small>(mockup — sin imágenes reales)</small>
      </div>
    </div>
  </section>

  <div class="search">
    <div class="search-grid">
      <div class="col">
        <label>CIUDAD</label>
        <div class="field">
          <mat-icon>place</mat-icon>
          <input placeholder="¿A dónde vas?">
        </div>
      </div>

      <div class="col">
        <label>ENTRADA</label>
        <div class="field">
          <mat-icon>calendar_today</mat-icon>
          <input placeholder="dd/mm/aaaa">
        </div>
      </div>

      <div class="col">
        <label>SALIDA</label>
        <div class="field">
          <mat-icon>calendar_today</mat-icon>
          <input placeholder="dd/mm/aaaa">
        </div>
      </div>

      <div class="col">
        <label>ADULTOS (MÍN. 1)</label>
        <div class="stepper">
          <mat-icon>group</mat-icon>
          <button mat-icon-button (click)="dec()" [disabled]="adults<=1"><mat-icon>remove</mat-icon></button>
          <span class="v">{{adults}}</span>
          <button mat-icon-button (click)="inc()"><mat-icon>add</mat-icon></button>
        </div>
      </div>

      <div class="col btn">
        <button mat-raised-button color="primary" class="full">Buscar</button>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .hero{
      display:grid; grid-template-columns:1.2fr 1fr; gap:24px; align-items:center;
      margin:12px 0 20px;
    }
    .h1{ font-size:56px; line-height:1.0; font-weight:800; margin:0 0 10px; }
    .sub{ color:#60646c; margin:0 0 14px; }
    .chips{ display:flex; gap:8px; flex-wrap:wrap; }
    .chip{ padding:6px 12px; border-radius:999px; background:#f2f2f2; color:#555; font-size:12px; }

    .mock{
      background:#ededed; border:1px solid #dfdfdf; border-radius:18px;
      min-height:260px; display:flex; align-items:center; justify-content:center;
      color:#8b8b8b; text-align:center;
    }

    .search{ margin-top:8px; }
    .search-grid{
      background:#f7f8f9; border:1px solid #e6e7e9; border-radius:16px;
      padding:14px; display:grid; gap:12px;
      grid-template-columns: 1.2fr 0.9fr 0.9fr 1.1fr 0.6fr;
    }
    .col label{ display:block; font-size:12px; color:#868b94; margin-bottom:6px; }
    .field{
      display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #e1e1e1;
      border-radius:12px; padding:10px 12px;
    }
    .field input{ border:none; outline:none; width:100%; background:transparent; font-size:14px; }

    .stepper{
      display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #e1e1e1;
      border-radius:12px; padding:6px 10px;
    }
    .stepper .v{ min-width:16px; text-align:center; }

    .btn{ display:flex; align-items:end; }
    .full{ width:100%; }

    @media (max-width: 900px){
      .hero{ grid-template-columns:1fr; }
      .search-grid{ grid-template-columns:1fr; }
    }
  `]
})
export class HomeHero {
  adults = 1;
  inc(){ this.adults++; }
  dec(){ if(this.adults>1) this.adults--; }
}
