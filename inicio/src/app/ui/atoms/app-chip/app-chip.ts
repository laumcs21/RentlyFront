import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="chip">{{text}}</span>`,
  styles: [`
    .chip{
      display:inline-block;
      padding:6px 12px;
      border-radius:999px;
      background:#f2f2f2;
      color:#555;
      font-size:12px;
      line-height:1;
    }
  `]
})
export class AppChip {
  @Input() text = '';
}
