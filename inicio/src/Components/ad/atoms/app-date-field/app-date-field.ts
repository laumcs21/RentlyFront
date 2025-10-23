import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@Component({
  selector: 'app-date-field',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatMomentDateModule],
  template: `
  <mat-form-field appearance="outline" class="w">
    <mat-icon matPrefix>calendar_today</mat-icon>
    <input matInput [matDatepicker]="picker" [placeholder]="placeholder">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>
  `,
  styles:[`.w{width:100%}`]
})
export class AppDateField {
  @Input() placeholder = 'dd/mm/aaaa';
}
