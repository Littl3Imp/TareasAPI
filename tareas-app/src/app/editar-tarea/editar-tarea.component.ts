import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareasService, Tarea } from '../tareas.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {
  tarea: Tarea = {
    id: 0,
    titulo: '',
    descripcion: '',
    estado: 'Pendiente',
    fechaCreacion: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tareasService: TareasService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tareasService.getTarea(id).subscribe(
      tarea => this.tarea = tarea,
      error => console.error('Error al cargar tarea', error)
    );
  }

  actualizarTarea(): void {
    this.tareasService.updateTarea(this.tarea).subscribe(
      () => this.router.navigate(['/tareas']),
      error => console.error('Error al actualizar tarea', error)
    );
  }
}
