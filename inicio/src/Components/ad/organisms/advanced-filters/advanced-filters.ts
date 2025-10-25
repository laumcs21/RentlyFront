import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-advanced-filters',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,
    MatDatepickerModule, MatNativeDateModule, MatSelectModule,
    MatChipsModule
  ],
  template: `
    <div class="box">
      <div class="row">
        <!-- CIUDAD -->
        <mat-form-field appearance="outline" class="w100">
          <mat-label>Ciudad</mat-label>
          <mat-icon fontSet="material-symbols-outlined" matPrefix>location_on</mat-icon>
          <input matInput [(ngModel)]="ciudad" placeholder="¿A dónde vas?" />
        </mat-form-field>

        <!-- Entrada -->
        <mat-form-field appearance="outline" class="w100">
          <mat-label>Entrada</mat-label>
          <mat-icon fontSet="material-symbols-outlined" matPrefix>calendar_month</mat-icon>
          <input matInput [matDatepicker]="dpIn" [(ngModel)]="entrada" />
          <mat-datepicker-toggle matIconSuffix [for]="dpIn"></mat-datepicker-toggle>
          <mat-datepicker #dpIn></mat-datepicker>
        </mat-form-field>

        <!-- Salida -->
        <mat-form-field appearance="outline" class="w100">
          <mat-label>Salida</mat-label>
          <mat-icon fontSet="material-symbols-outlined" matPrefix>calendar_month</mat-icon>
          <input matInput [matDatepicker]="dpOut" [(ngModel)]="salida" />
          <mat-datepicker-toggle matIconSuffix [for]="dpOut"></mat-datepicker-toggle>
          <mat-datepicker #dpOut></mat-datepicker>
        </mat-form-field>

        <!-- ADULTOS -->
        <mat-form-field appearance="outline">
          <mat-label>Adultos (mín. 1)</mat-label>
          <mat-select [(ngModel)]="adultos">
            <mat-option *ngFor="let n of adultosOpts" [value]="n">{{ n }}</mat-option>
          </mat-select>
        </mat-form-field>

        <!-- CTA -->
        <div class="cta">
          <button mat-raised-button class="orange" (click)="buscar()">Buscar</button>
        </div>
      </div>

      <!-- Fila 2: Precio por noche (range nativo) -->
      <div class="row row2">
        <div class="precio">
          <div class="label">PRECIO POR NOCHE</div>

          <input
            class="price-range"
            type="range"
            min="50" max="500" step="10"
            [(ngModel)]="precioMax"
            aria-label="Precio por noche"/>

          <span class="pill">\${{ precioMax }}/noche</span>
        </div>

        <mat-chip-listbox multiple class="chips">
          <mat-chip-option *ngFor="let s of servicios"
                          [selected]="selected.has(s)"
                          (click)="toggle(s)">
            {{ s }}
          </mat-chip-option>
        </mat-chip-listbox>
      </div>
        `,
  styles: [`
    .box{
      background:#fff; border:1px solid #e6e7e9; border-radius:16px; padding:16px;
    }
    .row{
      display:grid;
      grid-template-columns: 1.2fr 0.9fr 0.9fr 0.6fr auto;
      gap:16px; align-items:end;
    }
    .row2{
      grid-template-columns: 1fr auto; align-items:center; margin-top:14px;
    }
    .cta{ display:flex; align-items:end; }
    .orange.mat-mdc-raised-button{
      background:#ff6a00; color:#fff;
    }
    .orange.mat-mdc-raised-button:hover{
      background:#e85f00;
    }
    .precio{ display:flex; align-items:center; gap:12px; }
    .precio .label{ font-size:12px; color:#7d828a; text-transform:uppercase; }
    .pill{
      font-size:12px; color:#333; background:#fff; border:1px solid #e6e7e9;
      border-radius:999px; padding:4px 8px
    }
    .chips{ display:flex; gap:8px; flex-wrap:wrap; }
    @media (max-width: 900px){
      .row{ grid-template-columns: 1fr; }
      .row2{ grid-template-columns: 1fr; gap:12px; }
      .cta{ align-items:stretch; }
      .orange{ width:100%; }
    }
  `]
})
export class AdvancedFilters {
  ciudad = '';
  entrada?: Date;
  salida?: Date;
  adultos = 1;
  adultosOpts = [1,2,3,4,5,6,7,8];

  precioMax = 180;
  onPrice(v: number){ this.precioMax = v; }
  servicios = ['Cocina', 'Apto mascotas', 'Parqueadero', 'Piscina', 'Wi-Fi'];
  selected = new Set<string>();

  toggle(s: string){ this.selected.has(s) ? this.selected.delete(s) : this.selected.add(s); }

  buscar(){
    console.log({
      ciudad: this.ciudad,
      entrada: this.entrada,
      salida: this.salida,
      adultos: this.adultos,
      precioMax: this.precioMax,
      servicios: [...this.selected]
    });
  }
}
