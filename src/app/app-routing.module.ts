import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/modulos/admin/usuarios/usuarios/usuarios.component';
import { RegistroComponent } from './componentes/modulos/admin/usuarios/registro/registro.component';
import { ModificarComponent } from './componentes/modulos/admin/usuarios/modificar/modificar.component';

const routes: Routes = [
  { path: 'admin/usuarios', component: UsuariosComponent },
  { path: 'admin/usuarios/registro', component: RegistroComponent },
  { path: 'admin/usuarios/modificar/:idUsuario', component: ModificarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
