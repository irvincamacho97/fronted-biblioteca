import { Observable } from "rxjs";
import { HttpService } from "../utileria/http.service";
import { UrlServices } from "../utileria/url-service";
import { BaseResponse } from "../modelos/response/base-response";
import { UsuarioPaginacionResponse, UsuarioResponse } from "../modelos/response/usuario-response";
import { Injectable } from "@angular/core";
import { UsuarioRegistroRequest } from "../modelos/request/usuario-registro-request";
import { UsuarioModificarRequest } from "../modelos/request/usuario-modificar-request";

@Injectable({
    providedIn: 'root'
  })

export class UsuarioService{

    private urlServices: UrlServices;

    constructor(private httpService: HttpService) { 
        this.urlServices = new UrlServices();
    }

    obtenerListaUsuario(page: number, size: number):Observable<BaseResponse<UsuarioPaginacionResponse>>{
        
        return this.httpService.callGet(this.urlServices.urlUsuario + `?page=${page}` + `&size=${size}` )
    }

    registro(request:UsuarioRegistroRequest):Observable<BaseResponse<String>>{
        return this.httpService.callPost(this.urlServices.urlUsuario,request);
    }

    elimina(idUsuario:number):Observable<BaseResponse<String>>{
        return this.httpService.callDelete(this.urlServices.urlUsuario+'/'+idUsuario);
    }

    obtenerUsuario(idUsuario:number):Observable<BaseResponse<UsuarioResponse>>{
        return this.httpService.callGet(this.urlServices.urlUsuario+'/'+idUsuario)
    }

    modificar(request:UsuarioModificarRequest):Observable<BaseResponse<String>>{
        return this.httpService.callPut(this.urlServices.urlUsuario,request);
    }
}