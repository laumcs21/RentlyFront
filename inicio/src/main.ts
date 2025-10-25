// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations'; // 👈
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { HomePage } from './components/ad/pages/home.page';
import { LoginPage } from './components/ad/pages/login.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'login', component: LoginPage },
];

bootstrapApplication(App, {
  providers: [
    provideZonelessChangeDetection(),
    provideAnimations(),     // 👈 estable
    provideRouter(routes),
  ],
}).catch(console.error);
