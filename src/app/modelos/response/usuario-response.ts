import { PaginacionResponse } from "./paginacion-response";

export interface UsuarioResponse {
    id_usuario: number;
    correo: string;
    nombre: string;
    apellido_materno: string;
    apellido_paterno: string;
    id_rol_usuario?: number;
    rol_usuario: string;
  }

  export interface UsuarioPaginacionResponse{

    elementos:UsuarioResponse[] ;

    paginacion:PaginacionResponse;
  }
  