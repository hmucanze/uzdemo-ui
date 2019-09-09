import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';

@Component({
  selector: 'app-estudante-dashboard',
  template: `
    <h1>Dashboard de Estudante</h1>
    <p>
      Olá, chamo-me <strong>{{ authService.jwtPayload?.nome }}</strong>.
    </p>
  `,
  styles: []
})
export class EstudanteDashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('DashBoard');
  }

}
