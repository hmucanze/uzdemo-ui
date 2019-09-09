import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { FuncionarioPesquisaComponent } from './funcionario-pesquisa/funcionario-pesquisa.component';
import { FuncionarioService } from './funcionario.service';

@NgModule({
  declarations: [
    FuncionarioPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    FuncionarioPesquisaComponent
  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionariosModule { }
