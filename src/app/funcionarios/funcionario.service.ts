import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

export class FuncionarioFilter {
  nome: string;

  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private funcionariosURL: string;

  constructor(private http: HttpClient) {
    this.funcionariosURL = `${environment.apiURL}/funcionarios`;
  }

  pesquisar(filtro: FuncionarioFilter): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get<any>(this.funcionariosURL, { params })
    .toPromise()
    .then(response => {
      const resultado = {
        funcionarios: response.content,
        total: response.totalElements
      };
      return resultado;
    });
  }

  remover(id: number): Promise<any> {
    return this.http.delete(`${this.funcionariosURL}/${id}`)
    .toPromise()
    .then(() => null);
  }
}
