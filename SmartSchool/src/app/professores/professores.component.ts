import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professores = [
    { nome: 'Joana'},
    { nome: 'Maria'},
    { nome: 'Cristina'},
    { nome: 'Luiza'},
    { nome: 'Lucas'},
    { nome: 'Pedro'},
    { nome: 'Paulo'},
    { nome: 'João'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
