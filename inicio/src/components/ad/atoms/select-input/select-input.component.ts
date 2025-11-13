import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface SelectOption { value: string; label: string; }

@Component({
  selector: 'ad-select-input',
  standalone: false,
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
})
export class SelectInputComponent {
  @Input() label = '';
  @Input() options: SelectOption[] = [];
  @Input({ required: true }) control!: FormControl<any>;
}
