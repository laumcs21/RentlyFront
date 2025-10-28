import { Component, Input } from '@angular/core';

@Component({
  selector: 'ad-cta-button',
  standalone: false,
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.css'],
})
export class CtaButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() isDisabled = false;
}

