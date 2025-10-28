import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.css'],
  standalone: false
})
export class FormRow {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() error: string | null = null;
}

