import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.css'],
  standalone: false

})
export class AdvancedFilters {
  @Input() items: any[] = [];
}
