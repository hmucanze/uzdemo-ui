import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EstudanteService } from './../estudante.service';
import { Distrito, Curso, Provincia, Estudante } from 'src/app/core/model';

@Component({
  selector: 'app-estudante-cadastro',
  templateUrl: './estudante-cadastro.component.html',
  styleUrls: ['./estudante-cadastro.component.css']
})
export class EstudanteCadastroComponent {

  cursos: Curso;
  distritos: Distrito;
  provincias: Provincia;
  estudante = new Estudante();

  constructor(
    private estudanteService: EstudanteService
  ) {

    this.buscarProvincias();

    this.buscarCursos();
  }

  salvar(form: NgForm) {
    console.log(this.estudante);
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
    this.buscarDistritosPorProvincia(this.estudante.usuario.distrito.provincia.id)
  }

  buscarCursos() {
    this.estudanteService.buscarCursos()
    .then(cursos => { this.cursos = cursos.map(
      c => ({ label: c.nome, value: c.id }));
    });
  }

}
