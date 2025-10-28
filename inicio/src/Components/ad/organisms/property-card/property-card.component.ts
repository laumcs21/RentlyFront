import { Component, Input } from '@angular/core';
import { Property } from '@models/property';

@Component({
  selector: 'ad-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  standalone: false

})
export class PropertyCard {
  @Input({ required: true }) p!: Property;
}
