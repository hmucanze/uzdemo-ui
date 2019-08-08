import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-pesquisa',
  templateUrl: './funcionario-pesquisa.component.html',
  styleUrls: ['./funcionario-pesquisa.component.css']
})
export class FuncionarioPesquisaComponent {

  constructor() { }

  funcionarios = [
    {id: 1, nome: 'Hortigénia Mapera', celular: '848398457', nascimento: '12/05/1990', proveniencia: 'Inhambane'},
    {id: 2, nome: 'Gertrudes Jeque', celular: '868398457', nascimento: '12/05/1980', proveniencia: 'Sofala'},
    {id: 3, nome: 'Crionicia Cuco', celular: '878396427', nascimento: '12/05/1984', proveniencia: 'Manica'},
    {id: 4, nome: 'Armando Sitole', celular: '848398457', nascimento: '12/05/1991', proveniencia: 'Zambézia'},
    {id: 5, nome: 'Mussa Nohiu', celular: '848398457', nascimento: '12/05/1982', proveniencia: 'Tete'}
  ];

}
