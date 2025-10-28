import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-home-hero></app-home-hero>

    <div style="margin:10px 0 6px">
      <app-advanced-filters></app-advanced-filters>
    </div>

    <app-featured-list></app-featured-list>

    <app-pagination [page]="page" [pages]="3" (change)="page=$event"></app-pagination>
  `,
  standalone: false
})
export class HomePage {
  page = 2;
}

