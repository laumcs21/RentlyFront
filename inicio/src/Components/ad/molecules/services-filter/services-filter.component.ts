import { Component } from '@angular/core';

@Component({
  selector: 'app-services-filter',
  templateUrl: './services-filter.component.html',
  styleUrls: ['./services-filter.component.css'],
  standalone: false
})
export class ServicesFilter {
  services = ['Cocina','Apto mascotas','Parqueadero','Piscina','Wi-Fi'];
  selected = new Set<string>();

  toggle(s: string) {
    this.selected.has(s) ? this.selected.delete(s) : this.selected.add(s);
  }
}
