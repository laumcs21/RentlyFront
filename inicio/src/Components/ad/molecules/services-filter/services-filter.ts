import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label>SERVICIOS</label>
    <div class="chips">
      <button *ngFor="let s of services"
              (click)="toggle(s)"
              [class.active]="selected.has(s)">
        {{s}}
      </button>
    </div>
  `,
  styles:[`
    label{ font-size:12px; color:#7d828a; display:block; margin-bottom:6px }
    .chips{ display:flex; gap:8px; flex-wrap:wrap }
    button{
      border:1px solid #e1e1e1; background:#fff; color:#444; padding:6px 10px; border-radius:999px; cursor:pointer; font-size:12px;
    }
    button.active{ border-color:#cdd8ff; background:#eef2ff; color:#2a3ca3 }
  `]
})
export class ServicesFilter {
  services = ['Cocina','Apto mascotas','Parqueadero','Piscina','Wi-Fi'];
  selected = new Set<string>();
  toggle(s:string){ this.selected.has(s) ? this.selected.delete(s) : this.selected.add(s); }
}
