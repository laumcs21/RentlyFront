import { Component, Input, OnChanges } from '@angular/core';
import { ListingsService } from '../../../../services/listings.service';
import { ListingCardDTO, ListingFilters } from '../../../../models/listing.models';

@Component({
  selector: 'ad-featured-grid',
  templateUrl: './featured-grid.component.html',
  styleUrls: ['./featured-grid.component.css'],
  standalone: false
})
export class FeaturedGridComponent implements OnChanges {
  @Input() filters!: ListingFilters;
  items: ListingCardDTO[] = [];
  loading = true;

  constructor(private listings: ListingsService) {}

  ngOnChanges() {
    this.loading = true;
    this.listings.getFeatured(this.filters ?? { limit: 12 }).subscribe({
      next: res => { this.items = res; this.loading = false; },
      error: () => { this.items = []; this.loading = false; }
    });
  }
}
