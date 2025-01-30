export interface BaseResponse<T = any> {

    mensaje: string;
  
    datos: T;
}