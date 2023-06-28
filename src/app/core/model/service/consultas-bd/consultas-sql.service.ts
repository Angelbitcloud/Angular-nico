import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasSqlService {

  private apiUrl = 'http://localhost:1423'; // Reemplaza con la URL de tu API Java

  constructor(private http: HttpClient) { }

  peticionSql(params: any): Observable<any> {
    const url = `${this.apiUrl}/consultas/${params}`;

    return this.http.get(url, { responseType: 'text' });
  }
}
