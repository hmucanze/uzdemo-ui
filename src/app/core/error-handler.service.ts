import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/components/common/api';

import { NotAuthenticatedError } from '../seguranca/uz-http-interceptor';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService,
    private router: Router
    ) {}

  handle(errorResponse: any) {
    let erro: string;

    if (typeof errorResponse === 'string') {
      erro = errorResponse;
    } else if (errorResponse instanceof NotAuthenticatedError) {
      erro = 'A sua secção expirou';
      this.router.navigate(['/login']);
    } else if (errorResponse instanceof  HttpErrorResponse
      && errorResponse.status >= 400 && errorResponse.status <= 499) {
      // console.log(errorResponse.error[0].mensagemUsuario);

      erro = 'Erro ao processar serviço';

      if (errorResponse.status === 403) {
        erro = 'Voce não tem permissão para executar essa acção!';
      }

      /*if (errorResponse.error.error !== 'invalid_token') {
        console.error('Erro', errorResponse);
        erro = errorResponse.error[0].mensagemUsuario;
      }*/
      console.error('Ocorreu um erro', errorResponse);
    } else {
      erro = 'Erro ao processar o serviço, Contacte o administrador';
      console.error('Ocorreu um erro', errorResponse);
    }
    this.messageService.add({
      severity: 'error', summary: 'Erro', detail: erro
    });
  }
}
