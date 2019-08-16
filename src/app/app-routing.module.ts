import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudantePesquisaComponent } from './estudantes/estudante-pesquisa/estudante-pesquisa.component';
import { EstudanteCadastroComponent } from './estudantes/estudante-cadastro/estudante-cadastro.component';
import { FuncionarioPesquisaComponent } from './funcionarios/funcionario-pesquisa/funcionario-pesquisa.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';


const routes: Routes = [
  { path: '', redirectTo: 'estudantes', pathMatch: 'full' },
  { path: 'estudantes', component: EstudantePesquisaComponent },
  { path: 'estudantes/novo', component: EstudanteCadastroComponent },
  { path: 'funcionarios', component: FuncionarioPesquisaComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
