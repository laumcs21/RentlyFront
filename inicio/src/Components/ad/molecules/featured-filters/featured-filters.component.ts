// src/app/components/ad/molecules/featured-filters/featured-filters.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListingFilters } from '../../../../models/listing.models';

@Component({
  selector: 'ad-featured-filters',
  templateUrl: './featured-filters.component.html',
  styleUrls: ['./featured-filters.component.css'],
  standalone: false
})
export class FeaturedFiltersComponent {
  @Output() filtersChange = new EventEmitter<ListingFilters>();

  form!: FormGroup;

  serviciosCatalogo = [
    { key: 'wifi',         label: 'Wifi' },
    { key: 'parqueadero',  label: 'Parqueadero' },
    { key: 'piscina',      label: 'Piscina' },
    { key: 'ac',           label: 'A/C' },
    { key: 'pet',          label: 'Pet friendly' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      precioMax: [300000],
      servicios: [[] as string[]],
      limit:     [12],
    });

    this.form.valueChanges.subscribe(v => this.filtersChange.emit(v));
  }

  toggleServicio(key: string) {
    const arr: string[] = [...this.form.value.servicios];
    const i = arr.indexOf(key);
    i >= 0 ? arr.splice(i, 1) : arr.push(key);
    this.form.patchValue({ servicios: arr }, { emitEvent: true });
  }

  onPrecioInput(ev: Event) {
  const v = Number((ev.target as HTMLInputElement).value);
  this.form.patchValue({ precioMax: v });
}
}
