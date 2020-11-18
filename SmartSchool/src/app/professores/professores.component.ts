import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  public professorSelecionado: Professor | undefined;

  public professores = [
    {id: 1, nome: 'Joana', disciplina: 'Ciências' },
    {id: 2, nome: 'Maria', disciplina: 'Matemática'},
    {id: 3, nome: 'Cristina', disciplina: 'Física'},
    {id: 4, nome: 'Luiza', disciplina: 'Dsenvolvimento C#'},
    {id: 5, nome: 'Lucas', disciplina: 'Lógica de Programação'},
    {id: 6, nome: 'Pedro', disciplina: 'Artes'},
    {id: 7, nome: 'Paulo', disciplina: 'EAD'}, 
    {id: 8, nome: 'João', disciplina: 'Economia'}
  ];

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
  }
  
  voltar(){
    this.professorSelecionado = undefined;
  }

  constructor() { }

  ngOnInit() {
  }

}
