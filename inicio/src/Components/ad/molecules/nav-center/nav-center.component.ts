import { Component, Input } from '@angular/core';

export interface NavItem {
  label: string;
  icon: string;
  link: string | any[];
}

@Component({
  selector: 'ad-nav-center',
  templateUrl: './nav-center.component.html',
  styleUrls: ['./nav-center.component.css'],
  standalone: false
})
export class NavCenter {
  @Input() items: NavItem[] = [];
}
