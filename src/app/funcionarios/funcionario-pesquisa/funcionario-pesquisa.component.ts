import { Component, ViewChild, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/components/common/api';
import { Table } from 'primeng/table';

import { Funcionario } from './../../core/model';
import { FuncionarioService, FuncionarioFilter } from './../funcionario.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-funcionario-pesquisa',
  templateUrl: './funcionario-pesquisa.component.html',
  styleUrls: ['./funcionario-pesquisa.component.css']
})

export class FuncionarioPesquisaComponent implements OnInit {

  @ViewChild('tabela', {static: true}) tabela: Table;
  filtro = new FuncionarioFilter();
  funcionarios: Funcionario [];
  totalRegistros = 0;

  constructor(
    private confirmationService: ConfirmationService,
    private funcionarioService: FuncionarioService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Pesquisa de funcionários');
  }

  pesquisar(pagina = 0) {
    this.funcionarioService.pesquisar(this.filtro)
    .then(resultado => {
      this.funcionarios = resultado.funcionarios,
      this.totalRegistros = resultado.total;
    });
  }

  aoCarregarTabela(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  aoRemover(funcionario: any) {
    this.confirmationService.confirm({
      message: `Deseja remover funcionario ${funcionario.usuario.nome}`,
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.remover(funcionario);
      }
    });
  }

  remover(funcionario: any) {
    this.funcionarioService.remover(funcionario.id)
    .then(() => {
      this.tabela.reset();
      this.messageService.add({
        severity: 'success', summary: 'Sucesso', detail: `${funcionario.usuario.nome} removido com sucesso!`
      });
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

}
