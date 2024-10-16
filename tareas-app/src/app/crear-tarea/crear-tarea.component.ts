import { Component } from '@angular/core';
import { TareasService, Tarea } from '../tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent {
  tarea: Tarea = {
    id: 0,
    titulo: '',
    descripcion: '',
    estado: 'Pendiente',
    fechaCreacion: new Date()
  };

  constructor(private tareasService: TareasService, private router: Router) { }

  crearTarea(): void {
    this.tareasService.createTarea(this.tarea).subscribe(
      (tareaCreada) => {
        console.log('Tarea creada:', tareaCreada);
        this.router.navigate(['/tareas']); // Navigate to the task list after creation
      },
      (error) => {
        console.error('Error al crear la tarea:', error);
      }
    );
  }
}
