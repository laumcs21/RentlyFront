import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="hero">
    <div class="left">
      <h1 class="h1">Encuentra tu próximo<br>alojamiento</h1>
      <p class="sub">
        Busca por ciudad, fechas, precio y servicios. Gestiona reservas, deja calificaciones
        y disfruta de una experiencia segura.
      </p>
      <div class="chips">
        <span class="chip">JWT</span>
        <span class="chip">Spring Boot</span>
        <span class="chip">Angular/React</span>
        <span class="chip">MariaDB</span>
        <span class="chip">Mapbox</span>
        <span class="chip">Cloudinary</span>
      </div>
    </div>

    <div class="right">
      <div class="img-wrap">
        <img class="hero-img"
             src="/hero/hero.jpg"
             alt="Alojamientos destacados"
             onerror="this.src='https://picsum.photos/1200/800?blur=1'">
      </div>
    </div>
  </section>
  `,
  styles: [`
    .hero{ display:grid; grid-template-columns:1.2fr 1fr; gap:24px; align-items:center; margin:12px 0 20px; }
    .h1{ font-size:56px; line-height:1.0; font-weight:800; margin:0 0 10px; }
    .sub{ color:#60646c; margin:0 0 14px; }
    .chips{ display:flex; gap:8px; flex-wrap:wrap; }
    .chip{ padding:6px 12px; border-radius:999px; background:#f2f2f2; color:#555; font-size:12px; }
    .img-wrap{ position:relative; border-radius:18px; overflow:hidden; border:1px solid #dfdfdf; min-height:260px; background:#f2f2f2; }
    .hero-img{ width:100%; height:100%; display:block; object-fit:cover; }
    .img-wrap::after{ content:""; position:absolute; inset:0; background:linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.08) 100%); pointer-events:none; }
    @media (max-width: 900px){ .hero{ grid-template-columns:1fr; } .h1{ font-size:40px; } .img-wrap{ min-height:200px; } }
  `]
})
export class HomeHero {}



