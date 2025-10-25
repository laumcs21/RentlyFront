import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="badge" [class.warn]="type==='Loco'" [class.new]="type==='Nuevo'">{{ type }}</span>`,
  styles:[`
    .badge{ display:inline-block; font-size:11px; padding:2px 8px; border-radius:999px; background:#eee; color:#444 }
    .badge.warn{ background:#ffede3; color:#c45114 } /* Loco */
    .badge.new { background:#e8f3ff; color:#0b64c0 } /* Nuevo */
  `]
})
export class AppBadge {
  @Input() type: 'Nuevo'|'Loco'|string = 'Nuevo';
}
