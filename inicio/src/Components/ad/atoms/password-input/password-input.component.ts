import { Component, Input, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ad-password-input',
  standalone: false,
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent {
  @Input({ required: true }) label!: string;
  @Input() placeholder = '';
  @Input({ required: true }) control!: FormControl<any>; // si usas typed: FormControl<string>

  hidden = signal(true);
  toggle() { this.hidden.update(v => !v); }
}
