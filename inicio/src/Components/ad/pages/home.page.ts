import { Component } from '@angular/core';

@Component({
  selector: 'ad-home-page',
  template: `
    <ad-home-hero></ad-home-hero>

    <div style="margin:10px 0 6px">
      <ad-advanced-filters></ad-advanced-filters>
    </div>

    <ad-featured-list></ad-featured-list>

    <ad-pagination [page]="page" [pages]="3" (change)="page = $event"></ad-pagination>
  `,
  standalone: false,
})
export class HomePage {
  page = 2;
}
