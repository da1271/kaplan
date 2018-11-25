import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClass } from './class'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private url: string = 'http://localhost:3001/classes'

  constructor(private http: HttpClient) { }

  getClasses(): Observable<IClass[]> {
        return this.http.get<IClass[]>(this.url);
    }
}
