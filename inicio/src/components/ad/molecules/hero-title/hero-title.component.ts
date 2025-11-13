import { Component, Input } from '@angular/core';

@Component({
  selector: 'ad-hero-title',
  templateUrl: './hero-title.component.html',
  styleUrls: ['./hero-title.component.css'],
  standalone: false
})
export class HeroTitle {
  @Input() title   = 'Encuentra tu próximo alojamiento';
  @Input() subtitle = 'Busca por ciudad, fechas, precio y servicios...';
  @Input() tags: string[] = ['JWT','Spring Boot','Angular','MariaDB','Mapbox','Cloudinary'];
}
