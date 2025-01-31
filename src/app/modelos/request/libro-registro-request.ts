export interface LibroResgitroRequest{

    titulo_libro:string;

    autor_libro:string;

    genero_libro:string;

    anio_libro:number;

}

export interface LibroModificarRequest extends LibroResgitroRequest {
    id_libro:number;
}