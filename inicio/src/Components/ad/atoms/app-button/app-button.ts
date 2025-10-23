import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  template: `<button mat-raised-button [color]="color" [disabled]="disabled">{{ label }}</button>`,
})
export class AppButtonComponent {
  @Input() label = 'Botón';
  @Input() color: 'primary'|'accent'|'warn'|undefined = 'primary';
  @Input() disabled = false;
}
