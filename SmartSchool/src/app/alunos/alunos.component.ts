import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/aluno';
import { AlunoService } from './aluno.service';


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
public modo = 'post';
public alunos!: Aluno[];
// public alunos = Aluno[];


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

constructor(private fb: FormBuilder, 
            private modalService: BsModalService,
            private alunoService: AlunoService) { 
  this.criarForm();
}

ngOnInit() {
  this.carregarAlunos();
}

carregarAlunos(){
  this.alunoService.getAll().subscribe(
    (alunos: Aluno[]) => {
      this.alunos = alunos;
    },
    (erro: any) => {
      console.error(erro)
    }
  );
}


criarForm(){
  this.alunoForm = this.fb.group({
    id: [''],
    nome:['', Validators.required],
    sobrenome: ['', Validators.required],
    telefone: ['', Validators.required]
  });
}

salvarAluno(aluno: Aluno){
   (aluno.id == 0) ? this.modo = 'post' : this.modo = 'put';

   (this.alunoService as any)[this.modo](aluno).subscribe(
     (retorno: Aluno) => {
       console.log(retorno);
       this.carregarAlunos();
     },
     (erro: any) => {
       console.log(erro);
     }
   );


  //   this.alunoService.put(aluno.id, aluno).subscribe(
  //   () => {
  //     this.carregarAlunos();
  //   },
  //   (erro: any) => {
  //     console.log(erro);
  //   }
  // );
}

deletarAluno(id: number){
  this.alunoService.delete(id).subscribe(
    (model: any) => {
      console.log(model);
      this.carregarAlunos();
    },
    (erro: any) => {
      console.error(erro);
    }

  )
}
    
alunoSubmit(){
  this.salvarAluno(this.alunoForm.value);
  //console.log(this.alunoForm?.value);
}

alunoSelect(aluno: Aluno){
  this.alunoSelecionado = aluno;
  this.alunoForm.patchValue(aluno);
}

alunoNovo(){
  this.alunoSelecionado = new Aluno();
  this.alunoForm.patchValue(this.alunoSelecionado);
}

voltar(){
  this.alunoSelecionado = undefined;
}



}
