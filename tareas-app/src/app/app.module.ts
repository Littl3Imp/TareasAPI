import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { EditarTareaComponent } from './editar-tarea/editar-tarea.component';

import { TareasService } from './tareas.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    CrearTareaComponent,
    EditarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
