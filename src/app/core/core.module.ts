import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/components/common/api';
import { ToastModule } from 'primeng/toast';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { EstudantesModule } from '../estudantes/estudantes.module';
import { FuncionariosModule } from '../funcionarios/funcionarios.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    ConfirmDialogModule,
    ToastModule,

    EstudantesModule,
    FuncionariosModule
  ],
  exports: [
    ConfirmDialogModule,
    ToastModule,

    EstudantesModule,
    FuncionariosModule,
    NavbarComponent
  ],
  providers: [
    ConfirmationService,
    MessageService,
    ErrorHandlerService
  ]
})
export class CoreModule { }
