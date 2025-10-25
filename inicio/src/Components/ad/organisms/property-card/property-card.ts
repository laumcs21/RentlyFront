import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Property } from '@models/property';
import { AppBadge } from '@atoms/app-badge/app-badge';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, AppBadge],
  template: `
  <div class="card">
    <div class="photo">Foto <span class="corner"><mat-icon>favorite_border</mat-icon></span></div>
    <div class="body">
      <div class="title">
        <span>{{p.title}}</span>
        <span class="rate"><mat-icon>star</mat-icon> {{p.rating | number:'1.0-1'}}</span>
      </div>
      <div class="loc">{{p.city}}, {{p.depto}}</div>

      <div class="footer">
        <div class="price">\${{p.pricePerNight}} <small>/ noche</small></div>
        <app-badge *ngIf="p.tag" [type]="p.tag!"></app-badge>
      </div>
    </div>
  </div>
  `,
  styles:[`
    .card{
      background:#fff; border:1px solid #e6e7e9; border-radius:14px; overflow:hidden;
      display:flex; flex-direction:column; min-height: 220px;
    }
    .photo{
      height:120px; background:#eee; color:#9aa2b1; display:flex; align-items:center; justify-content:center; position:relative;
    }
    .corner{ position:absolute; right:8px; top:8px; background:#fff; border:1px solid #e6e7e9; border-radius:999px; padding:2px; }
    .body{ padding:10px 12px }
    .title{ display:flex; align-items:center; justify-content:space-between; gap:8px; font-weight:600 }
    .title .rate{ color:#111; display:flex; align-items:center; gap:2px; font-weight:700 }
    .title .rate mat-icon{ font-size:16px; height:16px; width:16px; color:#f6b100 }
    .loc{ color:#7d828a; font-size:12px; margin:2px 0 8px }
    .footer{ display:flex; align-items:center; justify-content:space-between }
    .price{ font-weight:700 }
    .price small{ font-weight:400; color:#777 }
  `]
})
export class PropertyCard {
  @Input({required:true}) p!: Property;
}
