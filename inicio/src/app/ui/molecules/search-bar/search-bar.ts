import { Component } from '@angular/core';
import { AppTextField } from '../../atoms/app-text-field/app-text-field';
import { AppDateField } from '../../atoms/app-date-field/app-date-field';
import { AppGuestStepper } from '../../atoms/app-guest-stepper/app-guest-stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [AppTextField, AppDateField, AppGuestStepper, MatButtonModule],
  template: `
  <div class="bar">
    <div class="col"><label>CIUDAD</label><app-text-field icon="place" placeholder="¿A dónde vas?"></app-text-field></div>
    <div class="col"><label>ENTRADA</label><app-date-field placeholder="dd/mm/aaaa"></app-date-field></div>
    <div class="col"><label>SALIDA</label><app-date-field placeholder="dd/mm/aaaa"></app-date-field></div>
    <div class="col"><label>ADULTOS (MÍN. 1)</label><app-guest-stepper></app-guest-stepper></div>
    <div class="col btn"><button mat-raised-button color="primary" class="w">Buscar</button></div>
  </div>
  `,
  styles:[`
    .bar{
      background:#f7f8f9; border:1px solid #e6e7e9; border-radius:16px;
      padding:14px; display:grid; grid-template-columns: 1.2fr 0.9fr 0.9fr 1.1fr 0.6fr; gap:12px;
    }
    .col label{ display:block; font-size:12px; color:#868b94; margin-bottom:6px; }
    .btn{ display:flex; align-items:end }
    .w{ width:100% }
    @media (max-width: 900px){
      .bar{ grid-template-columns: 1fr; }
      .btn{ align-items:stretch }
    }
  `]
})
export class SearchBar {}
