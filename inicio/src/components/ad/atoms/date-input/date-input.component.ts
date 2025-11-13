import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ad-date-input',
  standalone: false,
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
})
export class DateInputComponent {
  @Input({ required: true }) label!: string;
  @Input() placeholder = '';
  @Input({ required: true }) control!: FormControl<any>; // si usas typed: FormControl<Date | null>
}
