import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { FuncionarioPesquisaComponent } from './funcionario-pesquisa/funcionario-pesquisa.component';



@NgModule({
  declarations: [
    FuncionarioPesquisaComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    FuncionarioPesquisaComponent
  ]
})
export class FuncionariosModule { }
