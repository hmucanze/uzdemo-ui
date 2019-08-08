import { AppRoutingModule } from './app-routing.module';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { MessageService, ConfirmationService } from 'primeng/components/common/api';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EstudantePesquisaComponent } from './estudantes/estudante-pesquisa/estudante-pesquisa.component';
import { EstudanteCadastroComponent } from './estudantes/estudante-cadastro/estudante-cadastro.component';
import { FuncionarioPesquisaComponent } from './funcionarios/funcionario-pesquisa/funcionario-pesquisa.component';

const router: Routes = [
  { path: 'estudantes', component: EstudantePesquisaComponent },
  { path: 'estudantes/novo', component: EstudanteCadastroComponent },
  { path: 'funcionarios', component: FuncionarioPesquisaComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    // BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(router),

    CoreModule,
  ],
  providers: [
    ConfirmationService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
