// app-guest-stepper.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-guest-stepper',
  standalone: false,
  templateUrl: './app-guest-stepper.component.html',
  styleUrls: ['./app-guest-stepper.component.css'],
})
export class AppGuestStepperComponent {
  value = 1;
  inc(){ this.value++; }
  dec(){ if (this.value > 1) this.value--; }
}
