import { EstudanteDashboardComponent } from './core/estudante-dashboard.component';
import { AuthGuard } from './seguranca/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudantePesquisaComponent } from './estudantes/estudante-pesquisa/estudante-pesquisa.component';
import { EstudanteCadastroComponent } from './estudantes/estudante-cadastro/estudante-cadastro.component';
import { FuncionarioPesquisaComponent } from './funcionarios/funcionario-pesquisa/funcionario-pesquisa.component';
import { LoginComponent } from './seguranca/login/login.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { PaginaNaoAutorizadaComponent } from './core/pagina-nao-autorizada.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'estudantes',
    pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'estudantes',
    component: EstudantePesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_ESTUDANTE'] }
  },
  {
    path: 'estudantes/dashboard',
    component: EstudanteDashboardComponent
  },
  {
    path: 'estudantes/novo',
    component: EstudanteCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_ESTUDANTE'] }
  },
  {
    path: 'estudantes/:id',
    component: EstudanteCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_ESTUDANTE'] }
  },
  {
    path: 'funcionarios',
    component: FuncionarioPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_FUNCIONARIO'] }
  },
  {
    path: 'pagina-nao-autorizada',
    component: PaginaNaoAutorizadaComponent
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
