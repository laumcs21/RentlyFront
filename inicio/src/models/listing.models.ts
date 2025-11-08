export interface ListingCardDTO {
  id: number;
  titulo: string;
  ciudad: string;
  precioPorNoche: number;
  portadaUrl?: string;
  imagenes?: string[];
  servicios?: string[]; 
}
export interface ListingFilters {
  precioMax?: number | null;
  servicios?: string[];
  limit?: number;
}

export interface ListingDetailDTO extends ListingCardDTO {
  direccion?: string;
  capacidadMaxima?: number;
  descripcion?: string;
  latitud?: number;
  longitud?: number;
  imagenes?: string[]; 
  anfitrionId?: number;
  anfitrionNombre?: string;
  tipoAlojamiento?: string; 
  rating?: number;
  ratingCount?: number;
  createdAt?: string;
  updatedAt?: string;
}