import { Component } from '@angular/core';
import { TopBar } from '@organisms/top-bar/top-bar';
import { MainLayout } from './layout/main-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopBar, MainLayout],
  template: `
    <app-top-bar></app-top-bar>
    <app-main-layout></app-main-layout>
  `,
})
export class App {}


