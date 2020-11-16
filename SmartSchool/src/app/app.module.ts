import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';

import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [				
    AppComponent,
    AlunosComponent,
    ProfessoresComponent,
      PerfilComponent,
      DashboardComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AlunosModule { } //necessário declarar os componentes aqui p/ que o for funcione
export class ProfessoresModule { }
