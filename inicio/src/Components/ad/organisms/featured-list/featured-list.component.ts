import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.css'],
  standalone: false

})
export class FeaturedList {
  @Input() items: any[] = [];
}
