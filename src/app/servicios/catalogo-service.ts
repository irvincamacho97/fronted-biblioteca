import { Injectable } from "@angular/core";
import { UrlServices } from "../utileria/url-service";
import { HttpService } from "../utileria/http.service";
import { BaseResponse } from "../modelos/response/base-response";
import { CatalogoResponse } from "../modelos/response/catalogo-response";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CatalogosService {

    private urlServices: UrlServices;

    constructor(private httpService: HttpService) {
        this.urlServices = new UrlServices();
    }

    getCatRolUsuario():Observable<BaseResponse<CatalogoResponse[]>>{
       return this.httpService.callGet(this.urlServices.urlCatRolUsuario)
    }
}