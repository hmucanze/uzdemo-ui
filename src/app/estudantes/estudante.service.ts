import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as moment from 'moment';

import { Estudante, Provincia } from '../core/model';

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

  private estudantesUrl = 'http://localhost:8080/estudantes';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: EstudanteFilter): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic aGVybWluaW9AZ21haWwuY29tOmhlcm1pbmlvMTIz');
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

    return this.http.get(`${this.estudantesUrl}?resumo`, { headers, params })
      .toPromise()
      .then(response => {
        const resultado = {
          estudantes: response['content'],
          total: response['totalElements']
        };
        return resultado;
      });
  }

  salvar(estudante: Estudante): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic aGVybWluaW9AZ21haWwuY29tOmhlcm1pbmlvMTIz')
    .append('Content-Type', 'application/json');
    return this.http.post<Estudante>(this.estudantesUrl, estudante, { headers })
      .toPromise()
      .then(response => console.log(response));
  }

  remover(id: number): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic aGVybWluaW9AZ21haWwuY29tOmhlcm1pbmlvMTI');

    return this.http.delete(`${this.estudantesUrl}/${id}`, { headers })
    .toPromise()
    .then(() => null);
  }

  buscarPorId(id: number): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic aGVybWluaW9AZ21haWwuY29tOmhlcm1pbmlvMTIz');
    return this.http.get(`${this.estudantesUrl}/${id}`, { headers })
      .toPromise()
      .then(response => console.log(response));
  }

  buscarProvincias(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic aGVybWluaW9AZ21haWwuY29tOmhlcm1pbmlvMTIz');
    return this.http.get('http://localhost:8080/provincias', { headers })
      .toPromise()
      .then(response => response);
  }

  buscarDistritosPorProvincia(provinciaId: number): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic aGVybWluaW9AZ21haWwuY29tOmhlcm1pbmlvMTIz');

    let params = new HttpParams();
    params = params.set('provinciaId', provinciaId.toString());
    return this.http.get('http://localhost:8080/distritos', { headers, params })
      .toPromise()
      .then(response => response);
  }

  buscarCursos(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic aGVybWluaW9AZ21haWwuY29tOmhlcm1pbmlvMTIz');
    return this.http.get('http://localhost:8080/cursos', { headers })
      .toPromise()
      .then(response => response);
  }
}
