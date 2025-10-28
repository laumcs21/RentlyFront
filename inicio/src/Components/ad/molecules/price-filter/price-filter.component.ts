import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ad-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css'],
  standalone: false
})
export class PriceFilter {
  @Input() value = 250;
  @Output() valueChange = new EventEmitter<number>();

  onChange(ev: Event) {
    const v = Number((ev.target as HTMLInputElement).value);
    this.value = v;
    this.valueChange.emit(v);
  }
}

