import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ListingCardDTO } from '../models/listing.models';

@Injectable({ providedIn: 'root' })
export class AlojamientosService {
  private readonly base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private url(path: string) { return this.base ? `${this.base}${path}` : path; }

  /**
   * GET /alojamientos/featured?precioMax=..&servicios=A,B,C&limit=12
   * (ajusta nombres según tu endpoint real)
   */
  getFeatured(opts: { precioMax?: number; servicios?: string[]; limit?: number } = {})
  : Observable<ListingCardDTO[]> {
    let params = new HttpParams();
    if (opts.precioMax != null) params = params.set('precioMax', opts.precioMax);
    if (opts.limit != null)     params = params.set('limit', opts.limit);
    if (opts.servicios?.length) params = params.set('servicios', opts.servicios.join(','));
    return this.http.get<ListingCardDTO[]>(this.url('/alojamientos/featured'), { params });
  }
}
