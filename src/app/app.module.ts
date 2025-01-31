import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './componentes/modulos/admin/usuarios/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginacionComponent } from './componentes/Generales/paginacion/paginacion.component';
import { RegistroComponent } from './componentes/modulos/admin/usuarios/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarComponent } from './componentes/modulos/admin/usuarios/modificar/modificar.component';
import { LibrosComponent } from './componentes/modulos/admin/libros/libros/libros.component';
import { LibroRegistroComponent } from './componentes/modulos/admin/libros/libro-registro/libro-registro.component';
import { LibroModificarComponent } from './componentes/modulos/admin/libros/libro-modificar/libro-modificar.component';
import { SolicitudesLibroComponent } from './componentes/modulos/bibliotecario/solicitudes-libro/solicitudes-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PaginacionComponent,
    RegistroComponent,
    ModificarComponent,
    LibrosComponent,
    LibroRegistroComponent,
    LibroModificarComponent,
    SolicitudesLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
