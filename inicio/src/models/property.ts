export interface Property {
  id: number;
  title: string;
  city: string;
  depto: string;
  pricePerNight: number; 
  rating: number;        
  tag?: 'Nuevo' | 'Loco' | null;
  imageUrl?: string | null;
}
