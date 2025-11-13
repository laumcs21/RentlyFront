import { Component, Input } from '@angular/core';

@Component({
  selector: 'ad-chip',
  standalone: false,
  templateUrl: './app-chip.component.html',
  styleUrls: ['./app-chip.component.css'],
})
export class AppChipComponent {
  @Input() text = '';
}

