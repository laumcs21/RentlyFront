import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesService } from '@services/properties.service';
import { PropertyCard } from '@organisms/property-card/property-card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-featured-list',
  standalone: true,
  imports: [CommonModule, PropertyCard, MatButtonModule],
  template: `
  <section class="wrap">
    <div class="head">
      <div>
        <h3>Alojamientos destacados</h3>
        <small>Resultados según tus filtros.</small>
      </div>
      <button mat-stroked-button class="pill">Ver todos</button>
    </div>

    <div class="grid">
      <app-property-card *ngFor="let p of items" [p]="p"></app-property-card>
    </div>
  </section>
  `,
  styles:[`
    .wrap{ background:#edf2f2; border:1px solid #e6e7e9; border-radius:12px; padding:16px; margin-top:18px }
    .head{ display:flex; align-items:center; justify-content:space-between; margin-bottom:12px }
    .head h3{ margin:0; font-size:18px }
    .head small{ color:#7d828a }
    .grid{
      display:grid; gap:14px;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 900px){ .grid{ grid-template-columns:1fr } }
  `]
})
export class FeaturedList {
  items: any;

  constructor(private props: PropertiesService) {
    this.items = this.props.list().items;
  }
}

