import { PaginacionResponse } from "./paginacion-response"

export interface LibroResponse{
    id_libro:number
    titulo_libro:string
    autor_libro:string
    anio_libro:number
    genero_libro:string
}

export interface LibroResponsePaginacion{

    elementos:LibroResponse[];
    paginacion:PaginacionResponse;

}