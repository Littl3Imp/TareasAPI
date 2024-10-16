import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: string; // Cambiado de tipo específico a string
  fechaCreacion: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiUrl = 'https://localhost:7244/api/Tareas'; // Ajusta según tu configuración

  constructor(private http: HttpClient) { }

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  getTarea(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.apiUrl}/${id}`);
  }

  createTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, tarea);
  }

  updateTarea(tarea: Tarea): Observable<any> {
    return this.http.put(`${this.apiUrl}/${tarea.id}`, tarea);
  }

  deleteTarea(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
