import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8000/api/v1/cliente';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getLibrosVencidos(): Observable<any> {
    const params = new HttpParams().set('prestamoVencido', 'true');

    return this.http.get<any>(`${this.apiUrl}`, { params: params });
  }
}
