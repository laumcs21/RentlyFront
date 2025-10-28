import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone:false,
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent {
  @Input() label = 'Botón';
  @Input() color: 'primary' | 'accent' | 'warn' | undefined = 'primary';
  @Input() disabled = false;
}

