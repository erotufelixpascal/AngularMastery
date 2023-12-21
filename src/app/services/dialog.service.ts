import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _http: HttpClient) { }

  addCall(data: any){
    return this._http.post('http://localhost:3000/Dialog', data);
  }
}
