import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pg">
      <button (click)="prev()" [disabled]="page<=1">Anterior</button>
      <button class="curr">{{page}}</button>
      <button (click)="next()" [disabled]="page>=pages">Siguiente</button>
    </div>
  `,
  styles:[`
    .pg{ display:flex; gap:8px; align-items:center; justify-content:center; margin:16px 0 }
    button{
      border:1px solid #e1e1e1; background:#fff; color:#444; padding:6px 12px; border-radius:8px; cursor:pointer;
    }
    .curr{ background:#f4f5f7; font-weight:700 }
    button[disabled]{ opacity:.5; cursor:not-allowed }
  `]
})
export class Pagination {
  @Input() page = 1;
  @Input() pages = 3;
  @Output() change = new EventEmitter<number>();
  prev(){ if(this.page>1){ this.page--; this.change.emit(this.page); } }
  next(){ if(this.page<this.pages){ this.page++; this.change.emit(this.page); } }
}
