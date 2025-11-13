import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'ad-services-filter',
  templateUrl: './services-filter.component.html',
  styleUrls: ['./services-filter.component.css'],
  standalone: false
})
export class ServicesFilter {
  @Input({ required: true }) control!: FormControl<string[]>;
  services = ['Cocina','Apto mascotas','Parqueadero','Piscina','Wi-Fi'];
  selected = new Set<string>();

  toggle(s: string) {
    this.selected.has(s) ? this.selected.delete(s) : this.selected.add(s);
  }
}
