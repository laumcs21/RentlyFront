import { Component, Input } from '@angular/core';

@Component({
  selector: 'ad-date-field',
  standalone: false,
  templateUrl: './app-date-field.component.html',
  styleUrls: ['./app-date-field.component.css'],
})
export class AppDateFieldComponent {
  @Input() placeholder = 'dd/mm/aaaa';
}

