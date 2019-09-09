import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { EstudanteCadastroComponent } from './estudante-cadastro/estudante-cadastro.component';
import { EstudantePesquisaComponent } from './estudante-pesquisa/estudante-pesquisa.component';
import { EstudanteService } from './estudante.service';

@NgModule({
  declarations: [
    EstudanteCadastroComponent,
    EstudantePesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    ButtonModule,
    CalendarModule,
    DropdownModule,
    FieldsetModule,
    InputMaskModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    TableModule,
    TooltipModule,
    PasswordModule
  ],
  exports: [],
  providers: [
    EstudanteService
  ]
})
export class EstudantesModule { }
