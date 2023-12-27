import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl = 'http://localhost:3000/Dialog';

  constructor(private http:HttpClient) { }

  // Example: GET request
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/endpoint`);
  }

  // Example: POST request
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/endpoint`, data);
  }
}
