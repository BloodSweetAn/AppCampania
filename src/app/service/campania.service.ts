import { Campania } from './../model/campania';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const baseUrl = environment.base;
@Injectable({
  providedIn: 'root'
})
export class CampaniaService {
  private url = `${baseUrl}`
  private listaCambio = new Subject<Campania[]>()
  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    console.log(this.url);
    return this.http.get<Campania[]> (this.url + "/campanias");
  }

  create(campania: Campania){
    return this.http.post(this.url + "/campanias", campania);
  }

  setList(listaNueva: Campania[]){
    this.listaCambio.next(listaNueva);
  }
    
  getList(){
    return this.listaCambio.asObservable();
  }
}
