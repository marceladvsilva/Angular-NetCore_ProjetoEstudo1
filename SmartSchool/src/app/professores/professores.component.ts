import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/professor';
import { ProfessorService } from './professor.service';

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
  public professores!: Professor[];
  public modo = 'post';

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private professorService: ProfessorService) { 
    this.criarForm();
  }

  ngOnInit() {
    this.carregarProfessor();
  }

  carregarProfessor(){
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  criarForm(){
    this.professorForm = this.fb.group({
      id:['', Validators.required],
      nome:['', Validators.required],
      // disciplina: ['', Validators.required]
    });
  }
      
  professorSubmit(){
    this.salvarProfessor(this.professorForm?.value);
    //console.log(this.professorForm?.value);
  }
  salvarProfessor(professor: Professor) {
    (professor.id == 0) ? this.modo = 'post' : this.modo = 'put';

   (this.professorService as any)[this.modo](professor).subscribe(
     (retorno: Professor) => {
       console.log(retorno);
       this.carregarProfessor();
     },
     (erro: any) => {
       console.log(erro);
     }
   );

    // this.professorService.put(professor.id, professor).subscribe(
    //   () => {
    //     this.carregarProfessor();
    //   },
    //   (erro: any) => {
    //     console.log(erro);
    //   }
    // );
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  professorNovo(){
    this.professorSelecionado = new Professor();
    this.professorForm.patchValue(this.professorSelecionado);
  }
  
  voltar(){
    this.professorSelecionado = undefined;
  }

 

}
