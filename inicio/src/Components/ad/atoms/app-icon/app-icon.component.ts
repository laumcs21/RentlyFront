import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: false,
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.css'],
})
export class AppIconComponent {
  @Input() name = 'home';
}
