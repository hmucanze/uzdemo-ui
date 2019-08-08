import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as moment from 'moment';

export class EstudanteFilter {
  nome: string;
  dataNascimentoDe: Date;
  dataNascimentoAte: Date;

  pagina = 0;
  itensPorPagina = 2;
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

  remover(id: number): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic aGVybWluaW9AZ21haWwuY29tOmhlcm1pbmlvMTIz');

    return this.http.delete(`${this.estudantesUrl}/${id}`, { headers })
    .toPromise()
    .then(() => null);
  }
}
