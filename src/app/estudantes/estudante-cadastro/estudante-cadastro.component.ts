import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudante-cadastro',
  templateUrl: './estudante-cadastro.component.html',
  styleUrls: ['./estudante-cadastro.component.css']
})
export class EstudanteCadastroComponent {

  grupoCursos: any;
  distritos: any;
  provincias: any;

  constructor() {
    this.distritos = [
      { label: 'Beira', value: 1 },
      { label: 'Vilankulos', value: 2 }
    ];
    this.provincias = [
      { label: 'Maputo', value: 1 },
      { label: 'Inhambane', value: 2 },
      { label: 'Sofala', value: 3 },
      { label: 'Manica', value: 4 },
      { label: 'Zambézia', value: 5 }
    ];
    this.grupoCursos = [
      {
        label: 'FCSH', value: 'fcsh',
        items: [
          { label: 'Direito', value: 10 },
          { label: 'Contabilidade e Finanças', value: 11 },
          { label: 'Economia', value: '12' },
          { label: 'Gestao', value: '13' }
        ]
      },
      {
        label: 'FCT', value: 'fct',
        items: [
          { label: 'Engenharia Informática', value: 20 },
          { label: 'Engenharia de Processos', value: 21 }
        ]
      },
      {
        label: 'FCA', value: 'fca',
        items: [
          { label: 'Medicina Dentaria', value: 30 },
          { label: 'Farmácia', value: 31 }
        ]
      }
    ];
  }

}
