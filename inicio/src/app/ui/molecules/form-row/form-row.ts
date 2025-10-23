import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';          // ⬅️ añade esto
import { AppInputComponent } from '../../atoms/app-input/app-input';

@Component({
  selector: 'app-form-row',
  standalone: true,
  imports: [CommonModule, AppInputComponent],            // ⬅️ y esto
  template: `
    <div style="margin-bottom:16px">
      <app-input [label]="label" [type]="type" [placeholder]="placeholder"></app-input>
      <div *ngIf="error" style="color:#d32f2f; font-size:12px; margin-top:4px">
        {{ error }}
      </div>
    </div>
  `,
})
export class FormRow {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text'|'email'|'password' = 'text';
  @Input() error: string | null = null;
}
