export interface AutenticarResponse{
    id_usuario: number;
    correo: string;
    nombre: string;
    apellido_materno: string;
    apellido_paterno: string;
    id_rol_usuario?: number;
    rol_usuario: string;
    token:string;
}