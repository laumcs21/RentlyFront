import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingCardDTO, ListingDetailDTO, ListingFilters } from '../models/listing.models';
import { environment } from '../environments/environment';

@Injectable({ providedIn:'root' })
export class ListingsService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private url(p:string){ return this.base ? `${this.base}${p}` : p; }

  getFeatured(filters: ListingFilters, limit=12): Observable<ListingCardDTO[]> {
    let params = new HttpParams().set('limit', limit);
    if (filters?.precioMax != null) params = params.set('precioMax', filters.precioMax);
    if (filters?.servicios?.length) params = params.set('servicios', filters.servicios.join(','));
    return this.http.get<ListingCardDTO[]>(this.url('/alojamientos/featured'), { params });
  }

uploadImage(listingId: number, file: File) {
  const fd = new FormData();
  fd.append('file', file);
  return this.http.post(`${this.base}/alojamientos/${listingId}/imagenes`, fd);
}

  getById(id: number): Observable<ListingDetailDTO> {
    return this.http.get<ListingDetailDTO>(`/alojamientos/${id}`);
  }

  addImage(listingId: number, url: string) {
  return this.http.patch(`${this.base}/alojamientos/${listingId}`, { imagen: url });
}

getDetail(id: number) {
  return this.http.get<ListingDetailDTO>(this.url(`/alojamientos/${id}`));
}

getByHost(anfitrionId: number): Observable<ListingCardDTO[]> {
  return this.http.get<ListingCardDTO[]>(
    `${this.base}/alojamientos/mis?anfitrionId=${anfitrionId}`
  );
}

update(id: number, body: any) {
  return this.http.put(`${this.base}/alojamientos/${id}`, body);
}

deleteImage(listingId: number, url: string) {
  return this.http.delete(`${this.base}/alojamientos/${listingId}/imagenes`, {
    params: { url }
  });
}

create(body: any) {
  return this.http.post(`${this.base}/alojamientos`, body);
}



}
