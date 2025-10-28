import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: false,
  templateUrl: './app-chip.component.html',
  styleUrls: ['./app-chip.component.css'],
})
export class AppChipComponent {
  @Input() text = '';
}

