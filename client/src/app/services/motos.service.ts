import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Moto } from '../models/Moto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMotos() {
    return this.http.get(`${this.API_URI}/motos`);
  }

  getMoto(id: string) {
    return this.http.get(`${this.API_URI}/motos/${id}`);
  }

  deleteMoto(id: string) {
    return this.http.delete(`${this.API_URI}/motos/${id}`);
  }

  saveMoto(moto: Moto) {
    return this.http.post(`${this.API_URI}/motos`, moto);
  }

  updateMoto(id: string|number, updatedMoto: Moto): Observable<Moto> {
    return this.http.put(`${this.API_URI}/motos/${id}`, updatedMoto);
  }

}
