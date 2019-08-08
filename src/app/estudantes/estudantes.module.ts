import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PasswordModule } from 'primeng/password';

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

    ButtonModule,
    CalendarModule,
    DropdownModule,
    FieldsetModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    PasswordModule
  ],
  exports: [
    EstudanteCadastroComponent,
    EstudantePesquisaComponent
  ],
  providers: [
    EstudanteService
  ]
})
export class EstudantesModule { }
