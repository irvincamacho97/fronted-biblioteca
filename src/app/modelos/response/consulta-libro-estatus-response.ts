import { PaginacionResponse } from "./paginacion-response";

export interface ConsultaLibroEstatusResponse {
    idConsulta: number;
    idUsuario: number;
    correoUsuario: string;
    nombreUsuario: string;
    apellidoPaternoUsuario: string;
    apellidoMaternoUsuario: string;
    idLibro: number;
    tituloLibro: string;
    autorLibro: string;
    anioLibro: number;
    generoLibro: string;
    idEstatusConsulta: number;
    estatusConsulta: string;
  }

  export interface ConsultaLibroEstatusPaginacion{
  
      elementos:ConsultaLibroEstatusResponse[];
      paginacion:PaginacionResponse;
  
  }
  