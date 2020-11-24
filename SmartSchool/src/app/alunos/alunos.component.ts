import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/aluno';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

public modalRef!: BsModalRef;
public alunoForm!: FormGroup;
public titulo = 'Alunos';
public alunoSelecionado: Aluno | undefined;
public textSimple: string | undefined;

public alunos = [
   { id: 1,nome: 'Marta', sobrenome:'Kent', telefone: 33225547},
   { id: 2,nome: 'Paula', sobrenome:'Silva', telefone: 3325874},
   { id: 3,nome: 'Laura', sobrenome:'Santos', telefone: 3325547},
   { id: 4,nome: 'Luiza', sobrenome:'Godoy', telefone: 3354784},
   { id: 5,nome: 'Lucas', sobrenome:'Alvares', telefone: 332541},
   { id: 6,nome: 'Pedro', sobrenome:'José', telefone: 3387812},
   { id: 7,nome: 'Paulo', sobrenome:'Simão', telefone: 3348752},
   { id: 8,nome: 'João', sobrenome:'Simão', telefone: 3348752}
];


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

constructor(private fb: FormBuilder, 
            private modalService: BsModalService) { 
  this.criarForm();
}

ngOnInit(): void {
}

criarForm(){
  this.alunoForm = this.fb.group({
    nome:['', Validators.required],
    sobrenome: ['', Validators.required],
    telefone: ['', Validators.required]
  });
}
    
alunoSubmit(){
  console.log(this.alunoForm?.value);
}

alunoSelect(aluno: Aluno){
  this.alunoSelecionado = aluno;
  this.alunoForm.patchValue(aluno);
}

voltar(){
  this.alunoSelecionado = undefined;
}



}
