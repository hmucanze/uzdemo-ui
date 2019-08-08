import { EstudanteService, EstudanteFilter } from './../estudante.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/components/common/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-estudante-pesquisa',
  templateUrl: './estudante-pesquisa.component.html',
  styleUrls: ['./estudante-pesquisa.component.css']
})
export class EstudantePesquisaComponent implements OnInit {

  @ViewChild('tabela', {static: true}) tabela: Table;
  estudantes = [];
  filtro = new EstudanteFilter();
  totalRegistros = 0;

  constructor(
    private estudanteService: EstudanteService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {}

  ngOnInit() {
    //this.pesquisar();
  }

  aoCaregarTabela(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  aoRemover(estudante: any) {
    this.confirmationService.confirm({
      message: `Deseja Remover o estudante ${estudante.nome}`,
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.remover(estudante);
       }
    });
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.estudanteService.pesquisar(this.filtro)
      .then(resultado => {
        this.estudantes = resultado.estudantes,
        this.totalRegistros = resultado.total;
      });
  }

  remover(estudante: any) {
    this.estudanteService.remover(estudante.id)
      .then(() => {
        this.tabela.reset();
        this.messageService.add({
          severity: 'info', summary: 'Mensagem de Sucesso', detail: `${estudante.nome} removido com sucesso!`
        });
      });
  }
}
