import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { EditarTareaComponent } from './editar-tarea/editar-tarea.component';

const routes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: ListaTareasComponent },
  { path: 'crear', component: CrearTareaComponent },
  { path: 'editar/:id', component: EditarTareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
