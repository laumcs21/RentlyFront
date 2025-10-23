import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppChip } from '../../atoms/app-chip/app-chip';

@Component({
  selector: 'app-hero-title',
  standalone: true,
  imports: [CommonModule, AppChip],
  template: `
    <h1 class="h1">{{title}}</h1>
    <p class="sub">{{subtitle}}</p>

    <div class="chips">
      <app-chip *ngFor="let t of tags" [text]="t"></app-chip>
    </div>
  `,
  styles:[`
    .h1{
      font-size:56px; line-height:1.0; font-weight:800; margin:0 0 12px;
    }
    .sub{
      color:#60646c; margin:0 0 16px;
    }
    .chips{ display:flex; gap:8px; flex-wrap:wrap; }
    @media (max-width: 900px){ .h1{font-size:40px} }
  `]
})
export class HeroTitle {
  @Input() title = 'Encuentra tu próximo alojamiento';
  @Input() subtitle = 'Busca por ciudad, fechas, precio y servicios...';
  @Input() tags: string[] = ['JWT','Spring Boot','Angular','MariaDB','Mapbox','Cloudinary'];
}
