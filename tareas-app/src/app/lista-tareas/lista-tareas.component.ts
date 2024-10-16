import { Component, OnInit } from '@angular/core';
import { TareasService, Tarea } from '../tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.tareasService.getTareas().subscribe(
      tareas => this.tareas = tareas,
      error => console.error('Error al cargar tareas', error)
    );
  }

  eliminarTarea(id: number): void {
    this.tareasService.deleteTarea(id).subscribe(
      () => this.cargarTareas(),
      error => console.error('Error al eliminar tarea', error)
    );
  }

  cambiarEstado(tarea: Tarea): void {
    this.tareasService.updateTarea(tarea).subscribe(
      () => this.cargarTareas(),
      error => console.error('Error al actualizar tarea', error)
    );
  }
}
