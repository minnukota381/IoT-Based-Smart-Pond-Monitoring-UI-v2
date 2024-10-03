import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pond } from '../models/pond.model';

@Injectable({
  providedIn: 'root',
})
export class PondService {
  private apiUrl = '/api/ponds';

  constructor(private http: HttpClient) {}

  getAllPonds(): Observable<Pond[]> {
    return this.http.get<Pond[]>(this.apiUrl);
  }

  addPond(pond: Pond): Observable<Pond> {
    return this.http.post<Pond>(`${this.apiUrl}/admin/add`, pond);
  }

  updatePond(id: string, pond: Pond): Observable<Pond> {
    return this.http.put<Pond>(`${this.apiUrl}/admin/update/${id}`, pond);
  }

  deletePond(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/admin/delete/${id}`);
  }
}
