import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public modalRef!: BsModalRef;
  public professorForm!: FormGroup;
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService) { 
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm(){
    this.professorForm = this.fb.group({
      //id:['', Validators.required],
      nome:['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }
      
  professorSubmit(){
    console.log(this.professorForm?.value);
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }
  
  voltar(){
    this.professorSelecionado = undefined;
  }

 

}
