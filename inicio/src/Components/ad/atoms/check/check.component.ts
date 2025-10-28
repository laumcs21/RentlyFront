import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ad-check',
  standalone: false,
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class AdCheckComponent {
  @Input({ required: true }) control!: FormControl<boolean>;
}
