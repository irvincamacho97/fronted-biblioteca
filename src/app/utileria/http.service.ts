import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environment";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class HttpService {
    requestOptions: any;
    requestUnAuth: any;
    requestOptionsFile: any;
  
    constructor(private http: HttpClient) {
      this.updateHeaders();
    }
  
    updateHeaders() {
      let headerDict = {
        'Accept':'application/json',
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('tkn') || ''
      }
      let headerUnAuth = {
        'Content-Type': 'application/json'
      }
      let headerFile = {
      
        'Authorization': sessionStorage.getItem('tkn') || '',
        'Accept':'*/*',
      }
  
      this.requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
  
      this.requestUnAuth = {
        headers: new HttpHeaders(headerUnAuth)
      }
  
      this.requestOptionsFile = {
        headers: new HttpHeaders(headerFile),
      };
    }
  
    callPost( path: string, payload?: any, unauth = 0) : Observable<any> {
        if (unauth == 1) {
          return this.http.post<unknown>(environment.API_URL + path, payload, this.requestUnAuth);
        }
        const newHeader = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Expose-Headers': 'Authorization',
            'Authorization': 'Bearer ' + (sessionStorage.getItem('tkn') ?? '')
          }),
        };
        return this.http.post<unknown>(environment.API_URL + path, payload, newHeader);
    }
  
    callGet(path: string) : Observable<any> {
      const newHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Expose-Headers': 'Authorization',
          'Authorization': 'Bearer ' + (sessionStorage.getItem('tkn') ?? '')
        }),
      };
      return this.http.get<any>(environment.API_URL + path, newHeader);
    }
    callDelete(path: string): Observable<any> {
      const newHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Expose-Headers': 'Authorization',
          'Authorization': 'Bearer ' + (sessionStorage.getItem('tkn') ?? '')
        }),
      };
      return this.http.delete<any>(environment.API_URL + path, newHeader)
    }
    callPut( path: string, payload: any, unauth = 0) : Observable<any> {
      if (unauth == 1) {
        return this.http.put<unknown>(environment.API_URL + path, payload, this.requestUnAuth);
      }
      const newHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Expose-Headers': 'Authorization',
          'Authorization': 'Bearer ' + (sessionStorage.getItem('tkn') ?? '')
        }),
      };
      return this.http.put<unknown>(environment.API_URL + path, payload, newHeader);
  }
  
    downloadFile(url: string): any {
      this.requestOptions.headers.set('Authorization', sessionStorage.getItem('tkn') || '')
          return this.http.get(url, {responseType: 'blob'});
    }
  
    uploadFile(url: string, payload: any): Observable<any> {
      const newHeader = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Expose-Headers': 'Authorization',
          'Authorization': 'Bearer ' + (sessionStorage.getItem('tkn') ?? '')
        }),
      };
      return this.http.post<unknown>(environment.API_URL +url, payload, newHeader)
    }
  }
  