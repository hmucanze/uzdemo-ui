import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-nao-encontrada',
  template: `
    <p>
      Ops! Página não encontrada :(
    </p>
  `,
  styles: []
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Página não encontrada');
  }

}
