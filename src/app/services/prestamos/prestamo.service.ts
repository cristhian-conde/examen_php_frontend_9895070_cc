import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrestamoService {

  private apiUrl = 'http://localhost:8000/api/v1/prestamos';

  constructor(private http: HttpClient) {}

  getPrestamos(): Observable<any> {
    const params = new HttpParams().set('filter', 'mes');

    return this.http.get<any>(`${this.apiUrl}`, { params: params });
  }
}
