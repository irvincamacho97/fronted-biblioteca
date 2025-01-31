import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticarRequest } from 'src/app/modelos/request/autenticar-request';
import { UsuarioService } from 'src/app/servicios/usuario-service';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent {

  autenticarRequest= {} as AutenticarRequest

  fgAutenticar!: FormGroup;

  mostrarContra = false;

    constructor(private fb: FormBuilder,
                private usuarioService: UsuarioService,
                private router: Router
    ){
      this.creaFormAutenticar();
    }

    creaFormAutenticar(){
      this.fgAutenticar = this.fb.group({
        correo: ['', [Validators.required, Validators.email]],
        contrasenia: ['',[Validators.required]]
      });
    }

    cambioTipocontrasenia() {
      this.mostrarContra = !this.mostrarContra;
    }

    autenticar(){

      this.autenticarRequest.correo= this.fgAutenticar.controls['correo'].value;
      this.autenticarRequest.contrasenia= this.fgAutenticar.controls['contrasenia'].value;

      this.usuarioService.autenticar(this.autenticarRequest).subscribe(res =>{
        alert(res.mensaje);

        if(res.datos != null){
          sessionStorage.setItem('tkn', res.datos.token);
          sessionStorage.setItem('idUsuario', res.datos.id_usuario.toString());
          this.router.navigate(['admin/usuarios/registro']);
        }else{
          this.creaFormAutenticar();
        }
      })
  

    }

}