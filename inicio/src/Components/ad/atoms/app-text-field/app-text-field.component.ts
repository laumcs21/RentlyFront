import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: false,
  templateUrl: './app-text-field.component.html',
  styleUrls: ['./app-text-field.component.css'],
})
export class AppTextFieldComponent {
  @Input() icon = 'place';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' = 'text';
}

