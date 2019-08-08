import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { NavbarComponent } from './navbar/navbar.component';
import { EstudantesModule } from '../estudantes/estudantes.module';
import { FuncionariosModule } from '../funcionarios/funcionarios.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,

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
  ]
})
export class CoreModule { }
