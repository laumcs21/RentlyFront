import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ad-cta-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  template: `
    <button mat-raised-button class="orange" [routerLink]="routerLink">
      <mat-icon *ngIf="icon" fontSet="material-symbols-outlined">{{ icon }}</mat-icon>
      <span>{{ label }}</span>
    </button>
  `,
  styles: [`
    .orange.mat-mdc-raised-button{ background:#ff6a00; color:#fff; }
    .orange.mat-mdc-raised-button:hover{ background:#e85f00; }
  `]
})
export class CtaButton {
  @Input() label!: string;
  @Input() icon?: string;
  @Input() routerLink!: string | any[];
}
