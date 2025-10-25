import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButton } from '@atoms/nav-button/nav-button';

export interface NavItem { label: string; icon: string; link: string | any[]; }

@Component({
  selector: 'ad-nav-center',
  standalone: true,
  imports: [CommonModule, NavButton],
  template: `
    <nav class="mid">
      <ad-nav-button *ngFor="let it of items"
                     [label]="it.label" [icon]="it.icon" [routerLink]="it.link">
      </ad-nav-button>
    </nav>
  `,
  styles: [`
    .mid{ display:flex; gap:6px; align-items:center; margin:0 auto; }
    @media (max-width: 900px){ .mid{ display:none; } }
  `]
})
export class NavCenter {
  @Input() items: NavItem[] = [];
}
