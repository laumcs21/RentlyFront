import { Component, Input } from '@angular/core';

@Component({
  selector: 'ad-nav-button',
  standalone: false,
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css'],
})
export class NavButtonComponent {
  @Input() label!: string;
  @Input() icon?: string;
  @Input() routerLink!: string | any[];
  @Input() queryParams?: Record<string, any>;
}
