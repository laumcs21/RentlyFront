import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field appearance="outline" style="width:100%">
      <mat-label>{{label}}</mat-label>
      <input matInput [type]="type" [placeholder]="placeholder" [value]="value">
    </mat-form-field>
  `,
})
export class AppInputComponent {
  @Input() label = 'Campo';
  @Input() placeholder = '';
  @Input() type: 'text'|'email'|'password' = 'text';
  @Input() value = '';
}
