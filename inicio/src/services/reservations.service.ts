import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';

export interface CrearReservaDto {
  alojamientoId: number;
  fechaInicio: string;
  fechaFin: string;
  numeroHuespedes?: number;
  alojamientoTitulo?: string; 
}

@Injectable({ providedIn: 'root' })
export class ReservationsService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  crear(dto: CrearReservaDto): Observable<any> {
    return this.http.post(`${this.base}/reservas`, dto);
  }

getByHost(hostId: number, estado?: string, alojamientoId?: number) {
  let params = new HttpParams();
  if (estado) {
    params = params.set('estado', estado);
  }
  if (alojamientoId) {
    params = params.set('alojamientoId', alojamientoId.toString());
  }
  return this.http.get(`${this.base}/anfitriones/${hostId}/reservas`, { params });
}

  aprobar(hostId: number, reservaId: number): Observable<any> {
    return this.http.put(
      `${this.base}/anfitriones/${hostId}/reservas/${reservaId}/aprobar`,
      {}
    );
  }

  rechazar(hostId: number, reservaId: number, motivo: string): Observable<any> {
    return this.http.put(
      `${this.base}/anfitriones/${hostId}/reservas/${reservaId}/rechazar`,
      { motivo }
    );
  }
}
