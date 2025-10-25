import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
  template: `
    <mat-toolbar class="topbar">
      <!-- IZQUIERDA -->
      <a class="brand" routerLink="/">
        <mat-icon fontSet="material-symbols-outlined">home</mat-icon>
        <span>Rently</span>
      </a>

      <!-- CENTRO (centrado real) -->
      <nav class="center">
        <a mat-button routerLink="/explorar" routerLinkActive="is-active">
          <mat-icon fontSet="material-symbols-outlined">travel_explore</mat-icon>
          Explorar
        </a>
        <a mat-button routerLink="/propiedades" routerLinkActive="is-active">
          <mat-icon fontSet="material-symbols-outlined">villa</mat-icon>
          Propiedades
        </a>
        <a mat-button routerLink="/favoritos" routerLinkActive="is-active">
          <mat-icon fontSet="material-symbols-outlined">favorite</mat-icon>
          Favoritos
        </a>
        <a mat-button routerLink="/ayuda" routerLinkActive="is-active">
          <mat-icon fontSet="material-symbols-outlined">help</mat-icon>
          Ayuda
        </a>
      </nav>

      <!-- DERECHA -->
      <div class="right">
        <a mat-button routerLink="/register">Registrarse</a>
        <button mat-raised-button class="orange" routerLink="/login">
          <mat-icon fontSet="material-symbols-outlined">login</mat-icon>
          Iniciar sesión
        </button>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .topbar{
      position: relative;
      display:flex; align-items:center;
      height:56px; padding:0 12px; gap:12px;
      background:#fff; border:1px solid #eee; border-radius:12px; margin-bottom:12px;
      overflow: visible;
    }

    /* IZQUIERDA */
    .brand{ display:flex; gap:8px; align-items:center; text-decoration:none; color:#111; }
    .brand span{ font-weight:800; font-size:18px; }

    /* CENTRO */
    .center{
      position:absolute; left:50%; transform:translateX(-50%);
      display:flex; align-items:center; gap:4px;
      pointer-events:auto; /* que sean clicables encima del toolbar */
    }
    .is-active{ background:#f5f5f5; border-radius:8px; }

    /* DERECHA */
    .right{ margin-left:auto; display:flex; align-items:center; gap:8px; }
    .orange.mat-mdc-raised-button{ background:#ff6a00; color:#fff; }
    .orange.mat-mdc-raised-button:hover{ background:#e85f00; }

    /* Consistencia tipográfica en todos los botones */
    .topbar .mat-mdc-button, .topbar .mat-mdc-raised-button{
      --mdc-typography-button-font-size: 14px;
      --mdc-typography-button-font-weight: 500;
      border-radius: 999px;
      padding-inline: 10px;
    }

    /* Responsive: oculta centro en móvil */
    @media (max-width: 900px){
      .center{ display:none; }
    }
  `]
})
export class TopBar {}
