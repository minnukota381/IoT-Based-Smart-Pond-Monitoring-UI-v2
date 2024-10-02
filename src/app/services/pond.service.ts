import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pond } from '../models/pond.model';

@Injectable({
  providedIn: 'root',
})
export class PondService {
  private apiUrl = 'http://localhost:8080/api/ponds'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getPonds(): Observable<Pond[]> {
    return this.http.get<Pond[]>(this.apiUrl);
  }

  addPond(pond: Pond): Observable<Pond> {
    return this.http.post<Pond>(this.apiUrl, pond);
  }

  updatePond(pond: Pond): Observable<Pond> {
    return this.http.put<Pond>(`${this.apiUrl}/${pond.id}`, pond);
  }

  deletePond(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
