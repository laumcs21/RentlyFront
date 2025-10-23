import { Component } from '@angular/core';
import { HomeHero } from '../organisms/home-hero/home-hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHero],
  template: `<app-home-hero></app-home-hero>`,
})
export class HomePage {}

