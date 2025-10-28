import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: false,
  templateUrl: './app-badge.component.html',
  styleUrls: ['./app-badge.component.css']
})
export class AppBadgeComponent {
  @Input() type: 'Nuevo' | 'Loco' | string = 'Nuevo';
}
