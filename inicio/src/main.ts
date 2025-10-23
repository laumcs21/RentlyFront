import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { HomePage } from './app/pages/home.page';
import { LoginPage } from './app/pages/login.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'login', component: LoginPage },
];

bootstrapApplication(App, {
  providers: [
    provideZonelessChangeDetection(),
    provideAnimations(),
    provideRouter(routes),
  ],
}).catch(console.error);
