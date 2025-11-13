import { Component, Input } from '@angular/core';
import { Property } from '@models/property';

@Component({
  selector: 'ad-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.css'],
  standalone: false
})
export class FeaturedList {
  @Input() items: Property[] = MOCK_PROPERTIES;
}

const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Loft en Chapinero',
    city: 'Bogotá',
    depto: 'Chapinero Alto',
    pricePerNight: 180000,
    imageUrl: '/assets/mock/loft1.jpg',
    rating: 4.6,
    tag: 'Nuevo'
  },
  {
    id: 2,
    title: 'Apto en Laureles',
    city: 'Medellín',
    depto: 'Laureles',
    pricePerNight: 220000,
    imageUrl: '/assets/mock/apt1.jpg',
    rating: 4.8,
    tag: 'Loco'
  },
  {
    id: 3,
    title: 'Casa en El Peñón',
    city: 'Cali',
    depto: 'El Peñón',
    pricePerNight: 350000,
    imageUrl: '/assets/mock/house1.jpg',
    rating: 4.5
  },
  {
  id: 4,
  title: 'Suite con balcón en Getsemaní',
  city: 'Cartagena',
  depto: 'Getsemaní',
  pricePerNight: 480000,
  imageUrl: '/assets/mock/cartagena-suite.jpg',
  rating: 4.9,
  tag: 'Nuevo'
},
{
  id: 5,
  title: 'Apto frente al mar',
  city: 'Santa Marta',
  depto: 'Rodadero',
  pricePerNight: 260000,
  imageUrl: '/assets/mock/rodadero-apt.jpg',
  rating: 4.3,
  tag: 'Nuevo'
},
{
  id: 6,
  title: 'Cabaña rústica con chimenea',
  city: 'Villa de Leyva',
  depto: 'Centro',
  pricePerNight: 190000,
  imageUrl: '/assets/mock/vdl-cabana.jpg',
  rating: 4.7
}

];
