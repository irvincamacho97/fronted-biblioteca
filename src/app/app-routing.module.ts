import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/modulos/admin/usuarios/usuarios/usuarios.component';
import { RegistroComponent } from './componentes/modulos/admin/usuarios/registro/registro.component';
import { ModificarComponent } from './componentes/modulos/admin/usuarios/modificar/modificar.component';
import { LibrosComponent } from './componentes/modulos/admin/libros/libros/libros.component';
import { LibroRegistroComponent } from './componentes/modulos/admin/libros/libro-registro/libro-registro.component';
import { LibroModificarComponent } from './componentes/modulos/admin/libros/libro-modificar/libro-modificar.component';
import { SolicitudesLibroComponent } from './componentes/modulos/bibliotecario/solicitudes-libro/solicitudes-libro.component';

const routes: Routes = [
  { path: 'admin/usuarios', component: UsuariosComponent },
  { path: 'admin/usuarios/registro', component: RegistroComponent },
  { path: 'admin/usuarios/modificar/:idUsuario', component: ModificarComponent },
  { path: 'admin/libros', component: LibrosComponent },
  { path: 'admin/libros/registro', component: LibroRegistroComponent },
  { path: 'admin/libros/modificar/:idLibro', component: LibroModificarComponent },
  { path: 'bibliotecario', component: SolicitudesLibroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
