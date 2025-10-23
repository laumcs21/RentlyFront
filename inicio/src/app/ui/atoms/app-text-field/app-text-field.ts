import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  template: `
  <mat-form-field appearance="outline" class="w">
    <mat-icon matPrefix>{{icon}}</mat-icon>
    <input matInput [placeholder]="placeholder" [type]="type">
  </mat-form-field>
  `,
  styles:[`.w{width:100%}`]
})
export class AppTextField {
  @Input() icon = 'place';
  @Input() placeholder = '';
  @Input() type: 'text'|'email' = 'text';
}
