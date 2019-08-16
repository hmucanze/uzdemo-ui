import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }

  handle(error: any) {
    if (typeof error === 'string') {
      /*this.messageService.add({
        severity: 'Error', summary: 'Erro', detail: error
      });*/
      console.log('Hello');
    } else {
      console.log(error);
    }
  }
}
