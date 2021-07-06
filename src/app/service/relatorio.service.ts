import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Relatorio } from '../models/relatorio';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get('http://localhost:8080/api/v1/relatorio')
  }

  novo(relatorio: Relatorio){
    return this.httpClient.post('http://localhost:8080/api/v1/relatorio', relatorio)
  }
}
