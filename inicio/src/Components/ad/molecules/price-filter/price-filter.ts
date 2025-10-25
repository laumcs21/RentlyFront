import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ad-price-filter',              // 👈 usa este selector
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="wrap">
      <div class="row">
        <input
          type="range"
          min="50"
          max="500"
          step="10"
          [(ngModel)]="value"
          (ngModelChange)="valueChange.emit($event)"
        />
      </div>
    </div>
  `,
  styles:[`
    .row{ display:flex; align-items:center; gap:10px }
    input[type=range]{ width: 240px }
  `]
})
export class PriceFilter {
  @Input() value = 250;                     // 👈 Input para two-way
  @Output() valueChange = new EventEmitter<number>(); // 👈 Output para [(value)]
}

