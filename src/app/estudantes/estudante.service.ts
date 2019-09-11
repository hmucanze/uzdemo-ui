import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as moment from 'moment';

import { Estudante } from '../core/model';

export class EstudanteFilter {
  nome: string;
  dataNascimentoDe: Date;
  dataNascimentoAte: Date;

  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  private estudantesUrl: string;

  constructor(private http: HttpClient) {
    this.estudantesUrl = `${environment.apiURL}/estudantes`;
  }

  pesquisar(filtro: EstudanteFilter): Promise<any> {
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }
    if (filtro.dataNascimentoDe) {
      params = params.set('dataNascimentoDe', moment(filtro.dataNascimentoDe).format('YYYY-MM-DD'));
    }
    if (filtro.dataNascimentoAte) {
      params = params.set('dataNascimentoAte', moment(filtro.dataNascimentoAte).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.estudantesUrl}?resumo`, { params })
      .toPromise()
      .then(response => {
        const resultado = {
          estudantes: response['content'],
          total: response['totalElements']
        };
        return resultado;
      });
  }

  salvar(estudante: Estudante): Promise<Estudante> {
    return this.http.post<Estudante>(this.estudantesUrl, estudante)
    .toPromise()
    .then(response => response);
  }

  actualizar(estudante: Estudante): Promise<Estudante> {
    return this.http.put<Estudante>(`${this.estudantesUrl}/${estudante.id}`, estudante)
    .toPromise()
    .then(response => response);
  }

  remover(id: number): Promise<any> {
    return this.http.delete(`${this.estudantesUrl}/${id}`)
    .toPromise()
    .then(() => null);
  }

  buscarPorId(id: number): Promise<Estudante> {
    return this.http.get<Estudante>(`${this.estudantesUrl}/${id}`)
      .toPromise()
      .then(response => {
        this.converterStringParaData(response);
        return response;
      });
  }

  buscarProvincias(): Promise<any> {
    return this.http.get(`${environment.apiURL}/provincias`)
      .toPromise()
      .then(response => response);
  }

  buscarDistritosPorProvincia(provinciaId: number): Promise<any> {
    let params = new HttpParams();
    params = params.set('provinciaId', provinciaId.toString());
    return this.http.get(`${environment.apiURL}/distritos`, { params })
      .toPromise()
      .then(response => response);
  }

  buscarCursos(): Promise<any> {
    return this.http.get(`${environment.apiURL}/cursos`)
      .toPromise()
      .then(response => response);
  }

  private converterStringParaData(estudante: Estudante) {
    estudante.dataNascimento = moment(estudante.dataNascimento, 'YYYY-MM-DD').toDate();
  }
}
