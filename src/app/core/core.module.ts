import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { ToastModule } from 'primeng/toast';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { EstudantesModule } from '../estudantes/estudantes.module';
import { FuncionariosModule } from '../funcionarios/funcionarios.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { SegurancaModule } from '../seguranca/seguranca.module';
import { PaginaNaoAutorizadaComponent } from './pagina-nao-autorizada.component';
import { EstudanteDashboardComponent } from './estudante-dashboard.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    PaginaNaoAutorizadaComponent,
    EstudanteDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    ConfirmDialogModule,
    ToastModule,

    EstudantesModule,
    FuncionariosModule,
    SegurancaModule
  ],
  exports: [
    ConfirmDialogModule,
    ToastModule,

    EstudantesModule,
    FuncionariosModule,
    NavbarComponent
  ],
  providers: [
    Title,

    ConfirmationService,
    MessageService,

    ErrorHandlerService
  ]
})
export class CoreModule { }
