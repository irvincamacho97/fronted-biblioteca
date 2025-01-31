import { Injectable } from "@angular/core";
import { UrlServices } from "../utileria/url-service";
import { HttpService } from "../utileria/http.service";
import { Observable } from "rxjs";
import { BaseResponse } from "../modelos/response/base-response";
import { ConsultaLibroEstatusPaginacion } from "../modelos/response/consulta-libro-estatus-response";

@Injectable({
    providedIn: 'root'
  })

export class ConsultaLibroService{

private urlServices: UrlServices;

constructor(private httpService: HttpService) { 
    this.urlServices = new UrlServices();
}

obtenerListaConsulta(idEstatus:number, page: number, size: number):Observable<BaseResponse<ConsultaLibroEstatusPaginacion>>{
    return this.httpService.callGet(this.urlServices.urlConsultaEstatusLibro+'/'+idEstatus + `?page=${page}` + `&size=${size}` )
}

actualizaEstatusConsulta(idConsulta:number,idEstatusConsulta:number):Observable<BaseResponse<ConsultaLibroEstatusPaginacion>>{
    return this.httpService.callPut(this.urlServices.urlActualizaEstatusLibro+`?id_consulta=${idConsulta}` + `&id_estatus_consulta=${idEstatusConsulta}`,null )
}

}