import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios = [
    {role: 'Admin', email: 'herminio@gmail.com', senha: 'herminio123'},
    {role: 'Funcionario RA', email: 'crionicia@gmail.com', senha: 'crionicia123'},
    {role: 'Funcionario', email: 'hortigenia@gmail.com', senha: 'hortigenia123'},
    {role: 'Estudante', email: 'samuel@gmail.com', senha: 'samuel123'}
  ];
  constructor(
    private authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Login');
  }

  login(email: string, senha: string) {
    this.authService.login(email, senha)
    .then(() => {
      if (this.authService.temPermissao('ROLE_PESQUISAR_ESTUDANTE')) {
        this.router.navigate(['/estudantes']);
      } else {
        this.router.navigate(['/estudantes/dashboard']);
      }
    })
    .catch(error =>
      this.errorHandlerService.handle(error)
    );
  }

}
