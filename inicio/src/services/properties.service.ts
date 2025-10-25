import { Injectable } from '@angular/core';
import { Property } from '@models/property';

@Injectable({ providedIn: 'root' })
export class PropertiesService {
  private data: Property[] = [
    { id:1, title:'Cabaña moderna con vista', city:'Salento', depto:'Quindío', pricePerNight:280, rating:4.9, tag:'Loco' },
    { id:2, title:'Loft céntrico', city:'Armenia', depto:'Quindío', pricePerNight:320, rating:4.7 },
    { id:3, title:'Casa campestre', city:'Filandia', depto:'Quindío', pricePerNight:350, rating:4.8 },
    { id:4, title:'Apartamento luminoso', city:'Pereira', depto:'Risaralda', pricePerNight:240, rating:4.6 },
    { id:5, title:'Glamping premium', city:'Calarcá', depto:'Quindío', pricePerNight:300, rating:4.8, tag:'Nuevo' },
    { id:6, title:'Studio minimal', city:'Manizales', depto:'Caldas', pricePerNight:190, rating:4.5 },
  ];
  list(page=1, pageSize=6) {
    const start = (page-1)*pageSize;
    return {
      total: this.data.length,
      items: this.data.slice(start, start+pageSize)
    };
  }
}
