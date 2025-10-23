import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [MatIconModule],
  template: `<mat-icon [fontIcon]="name"></mat-icon>`,
})
export class AppIconComponent {
  @Input() name = 'home';
}
