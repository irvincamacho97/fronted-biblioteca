import { Injectable } from "@angular/core";
import { UrlServices } from "../utileria/url-service";
import { HttpService } from "../utileria/http.service";
import { Observable } from "rxjs";
import { BaseResponse } from "../modelos/response/base-response";
import { LibroResponse, LibroResponsePaginacion } from "../modelos/response/libro-response";
import { LibroModificarRequest, LibroResgitroRequest } from "../modelos/request/libro-registro-request";

@Injectable({
    providedIn: 'root'
  })

export class LibroService{

private urlServices: UrlServices;

constructor(private httpService: HttpService) { 
    this.urlServices = new UrlServices();
}

obtenerListaLibros(page: number, size: number):Observable<BaseResponse<LibroResponsePaginacion>>{
    return this.httpService.callGet(this.urlServices.urlLibro + `?page=${page}` + `&size=${size}` )
}

registro(request:LibroResgitroRequest):Observable<BaseResponse<String>>{
    return this.httpService.callPost(this.urlServices.urlLibro,request)
}

elimina(idLibro:number):Observable<BaseResponse<String>>{
    return this.httpService.callDelete(this.urlServices.urlLibro+'/'+idLibro)
}

obtenerLibro(idLibro:number):Observable<BaseResponse<LibroResponse>>{
    return this.httpService.callGet(this.urlServices.urlLibro+'/'+idLibro)
}

modificar(request:LibroModificarRequest):Observable<BaseResponse<String>>{
    return this.httpService.callPut(this.urlServices.urlLibro,request);
}


}