import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  titulo = 'Perfil';

  // public professores = [
  //   { nome: 'Joana'},
  //   { nome: 'Maria'},
  //   { nome: 'Cristina'},
  //   { nome: 'Luiza'},
  //   { nome: 'Lucas'},
  //   { nome: 'Pedro'},
  //   { nome: 'Paulo'},
  //   { nome: 'João'}
  // ];

  constructor() { }

  ngOnInit() {
  }

}
