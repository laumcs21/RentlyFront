import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ad-text-input',
  standalone: false,
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent {
  @Input({ required: true }) label!: string;
  @Input() icon?: string;
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' = 'text';
  @Input({ required: true }) control!: FormControl<any>; // si prefieres typed: FormControl<string>
}
