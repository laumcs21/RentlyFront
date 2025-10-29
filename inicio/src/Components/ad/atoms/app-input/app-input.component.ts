import { Component, Input } from '@angular/core';

@Component({
  selector: 'ad-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css'],
  standalone: false
})
export class AppInputComponent {
  @Input() label = 'Campo';
  @Input() placeholder = '';
  @Input() type: 'text'|'email'|'password' = 'text';
  @Input() value = '';
}
