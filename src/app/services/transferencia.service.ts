import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia : any[];
  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas() : Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any){
    this.setData(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private setData(transferencia: any){
    transferencia.data = new Date();
  }

}
