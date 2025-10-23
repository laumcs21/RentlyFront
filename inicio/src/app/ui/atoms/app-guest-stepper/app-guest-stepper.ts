import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-guest-stepper',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
  <div class="wrap">
    <mat-icon>group</mat-icon>
    <button mat-icon-button (click)="dec()" [disabled]="value<=1"><mat-icon>remove</mat-icon></button>
    <span class="v">{{value}}</span>
    <button mat-icon-button (click)="inc()"><mat-icon>add</mat-icon></button>
  </div>
  `,
  styles:[`
    .wrap{
      display:flex; align-items:center; gap:8px;
      border:1px solid #e1e1e1; border-radius:12px; padding:8px 12px;
      background:white;
    }
    .v{min-width:16px; text-align:center}
  `]
})
export class AppGuestStepper {
  value = 1;
  inc(){ this.value++; }
  dec(){ if(this.value>1) this.value--; }
}
