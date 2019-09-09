import { MessageService } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { EstudanteService } from './../estudante.service';
import { Distrito, Curso, Provincia, Estudante } from 'src/app/core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-estudante-cadastro',
  templateUrl: './estudante-cadastro.component.html',
  styleUrls: ['./estudante-cadastro.component.css']
})
export class EstudanteCadastroComponent implements OnInit {

  cursos: Curso;
  distritos: Distrito;
  provincias: Provincia;
  estudante = new Estudante();

  constructor(
    private estudanteService: EstudanteService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    const idEstudante = this.route.snapshot.params['id'];

    this.title.setTitle('Cadastro de Estudante');

    if (idEstudante) {
      this.buscarPorId(idEstudante);
    }
    this.buscarProvincias();

    this.buscarCursos();
  }

  get Editando() {
    return Boolean(this.estudante.id);
  }

  buscarPorId(id: number) {
    this.estudanteService.buscarPorId(id)
    .then(estudante => {
      this.estudante = estudante;
      this.title.setTitle(`Edição de Estudante: ${estudante.usuario.nome}`);
      this.carregarDistritos();
    });
  }

  salvar() {
    if (this.Editando) {
      this.actualizarEstudante();
    } else {
      this.salvarEstudante();
    }
  }

  salvarEstudante() {
    this.estudanteService.salvar(this.estudante)
    .then(estudante => {
      this.messageService.add({
        severity: 'success', summary: 'Sucesso', detail: 'estudante salvo com sucesso'
      });
      this.router.navigate(['/estudantes', estudante.id]);
    })
    .catch(erro =>
      this.errorHandler.handle(erro)
    );
  }

  actualizarEstudante() {
    this.estudanteService.actualizar(this.estudante)
    .then(estudante => {
      this.messageService.add({
        severity: 'success', summary: 'Sucesso', detail: 'estudante actualizado com sucesso'
      });
      this.estudante = estudante;
      this.router.navigate(['/estudantes']);
    })
    .catch(erro =>
      this.errorHandler.handle(erro)
    );
  }

  novo(form: NgForm) {
    form.reset();
    this.estudante = new Estudante();
  }

  buscarProvincias() {
    this.estudanteService.buscarProvincias()
    .then(provincias => { this.provincias = provincias.map(
      p => ({ label: p.nome, value: p.id }));
    });
  }

  buscarDistritosPorProvincia(provinciaId: number) {
    this.estudanteService.buscarDistritosPorProvincia(provinciaId)
    .then(distritos => {this.distritos = distritos.map(
      d =>  ({ label: d.nome, value: d.id }));
    });
  }

  carregarDistritos() {
    this.buscarDistritosPorProvincia(this.estudante.usuario.distrito.provincia.id);
  }

  buscarCursos() {
    this.estudanteService.buscarCursos()
    .then(cursos => { this.cursos = cursos.map(
      c => ({ label: c.nome, value: c.id }));
    });
  }

}
