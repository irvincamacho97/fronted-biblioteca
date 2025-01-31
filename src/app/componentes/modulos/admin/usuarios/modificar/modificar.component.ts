import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModificarRequest } from 'src/app/modelos/request/usuario-modificar-request';
import { UsuarioRegistroRequest } from 'src/app/modelos/request/usuario-registro-request';
import { UsuarioResponse } from 'src/app/modelos/response/usuario-response';
import { UsuarioService } from 'src/app/servicios/usuario-service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {

  idUsuario!: number;

  fgModificarUsuario!: FormGroup;

  usuarioResponse =  {} as UsuarioResponse;

  usuarioModificarRequest = {} as UsuarioModificarRequest;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService:UsuarioService,
    private usuarioService: UsuarioService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.route.params.subscribe((datos) => {
      this.idUsuario = datos['idUsuario'];
    });

    this.creaFormModificarUsuario();
    this.obtenerUsuario();
  }

  creaFormModificarUsuario(){
      this.fgModificarUsuario = this.fb.group({
        idUsuario:[[Validators.required]],
        nombre: ['', [Validators.required]],
        primerApellido: ['',[Validators.required]],
        segundoApellido: ['', [Validators.maxLength(49)]],
        correo: ['', [Validators.required, Validators.email, Validators.maxLength(99)]],
      });
  }

  obtenerUsuario(){
    this.userService.obtenerUsuario(this.idUsuario).subscribe(res=>{
      this.usuarioResponse = res.datos;
      this.fgModificarUsuario.patchValue({
        "idUsuario":this.usuarioResponse.id_usuario,
        "nombre": this.usuarioResponse.nombre,
        "primerApellido": this.usuarioResponse.apellido_paterno,
        "segundoApellido": this.usuarioResponse.apellido_materno,
        "correo": this.usuarioResponse.correo,
      });
    })
  }

  modificaUsuario(){

    const confirmacion = confirm('¿Estás seguro de que quieres actualizar este usuario?');

    this.usuarioModificarRequest.id_usuario = this.fgModificarUsuario.controls['idUsuario'].value;
    this.usuarioModificarRequest.nombre= this.fgModificarUsuario.controls['nombre'].value;
    this.usuarioModificarRequest.apellido_paterno= this.fgModificarUsuario.controls['primerApellido'].value;
    this.usuarioModificarRequest.apellido_materno= this.fgModificarUsuario.controls['segundoApellido'].value;
    this.usuarioModificarRequest.correo=this.fgModificarUsuario.controls['correo'].value;

    if (confirmacion) {
    this.usuarioService.modificar(this.usuarioModificarRequest).subscribe(res =>{
      alert(res.mensaje);
      this.router.navigate(['admin/usuarios']);
    })
  }

  }

}
