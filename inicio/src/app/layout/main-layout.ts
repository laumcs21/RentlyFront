import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule],
  template: `
    <!-- BARRA SUPERIOR -->
    <mat-toolbar color="primary">
      <span style="font-weight:600">Rently</span>
      <span style="flex:1 1 auto"></span>
      <button mat-button routerLink="/">Inicio</button>
      <button mat-button routerLink="/login">Login</button>
    </mat-toolbar>

    <!-- CONTENEDOR PRINCIPAL -->
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles:[`
    .container{
      max-width:1200px;
      margin:24px auto;
      padding:0 16px;
    }
  `]
})
export class MainLayout {}


