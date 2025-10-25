import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ad-nav-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  template: `
    <a mat-button
       [routerLink]="routerLink"
       routerLinkActive="is-active"
       [queryParams]="queryParams"
       class="nav-btn">
      <mat-icon *ngIf="icon" fontSet="material-symbols-outlined">{{ icon }}</mat-icon>
      <span>{{ label }}</span>
    </a>
  `,
  styles: [`
    .nav-btn { display:inline-flex; gap:6px; align-items:center; }
    .is-active { background:#f5f5f5; border-radius:8px; }
  `]
})
export class NavButton {
  @Input() label!: string;
  @Input() icon?: string;
  @Input() routerLink!: string | any[];
  @Input() queryParams?: Record<string, any>;
}
