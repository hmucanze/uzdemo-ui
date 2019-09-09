import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-nao-autorizada',
  template: `
    <h1>Não Autorizado</h1>
    <p>
      Lamentamos, não estás autrizado a executar esta acção!
    </p>
  `,
  styles: []
})
export class PaginaNaoAutorizadaComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Página não autorizada');
  }

}
