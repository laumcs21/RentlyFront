import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

type FiltersForm = FormGroup<{
  maxPrice: FormControl<number>;
  services: FormControl<string[]>;
}>;

@Component({
  selector: 'ad-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.css'],
  standalone: false
})
export class AdvancedFilters {
  @Output() change = new EventEmitter<{ maxPrice: number; services: string[] }>();

  minPrice = 0;
  maxPrice = 3_000_000;

  form: FiltersForm;

  get maxPriceCtrl() { return this.form.controls.maxPrice; }
  get servicesCtrl()  { return this.form.controls.services; }

  servicesOptions = ['Wifi','Parqueadero','Piscina','A/C','Pet friendly'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      maxPrice: this.fb.nonNullable.control(300_000),  // valor inicial
      services: this.fb.nonNullable.control<string[]>([])
    });

    this.form.valueChanges.subscribe(() => {
      this.change.emit(this.form.getRawValue());
    });
  }

  setPrice(v: number) {
    this.maxPriceCtrl.setValue(v);
    this.maxPriceCtrl.markAsDirty();
  }

  toggleService(s: string) {
    const current = new Set(this.servicesCtrl.value ?? []);
    current.has(s) ? current.delete(s) : current.add(s);
    this.servicesCtrl.setValue([...current]);
    this.servicesCtrl.markAsDirty();
  }

  apply() {
    this.change.emit(this.form.getRawValue());
  }
}
