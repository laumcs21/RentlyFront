import { Component } from '@angular/core';
import { HomeHero } from '@organisms/home-hero/home-hero';
import { AdvancedFilters } from '@organisms/advanced-filters/advanced-filters';
import { FeaturedList } from '@organisms/featured-list/featured-list';
import { Pagination } from '@molecules/pagination/pagination';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHero, AdvancedFilters, FeaturedList, Pagination],
  template: `
    <app-home-hero></app-home-hero>

    <div style="margin:10px 0 6px">
      <app-advanced-filters></app-advanced-filters>
    </div>

    <app-featured-list></app-featured-list>

    <app-pagination [page]="page" [pages]="3" (change)="page=$event"></app-pagination>
  `,
})
export class HomePage {
  page = 2;
}
