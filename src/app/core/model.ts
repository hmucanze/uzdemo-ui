export class Provincia {
  id: number;
  nome: string;
}

export class Distrito {
  id: number;
  nome: string;
  provincia = new Provincia();
}

export  class Usuario {
  id: number;
  nome: string;
  celular: number;
  email: string;
  senha: string;
  distrito = new Distrito();
}

export class Funcionario {
  id: number;
  usuaro = new Usuario();
}

export class Curso {
  id: number;
  nome: string;
  turno: string;
  funcionario = new Funcionario();
}

export class Estudante {
  id: number;
  dataNascimento: Date;
  numero: number;
  curso = new Curso();
  usuario = new Usuario();
}
