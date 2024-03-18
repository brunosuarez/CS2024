import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroMotoristaComponent } from './components/motorista/cadastro-motorista/cadastro-motorista.component';
import { EditMotoristaComponent } from './components/motorista/edit-motorista/edit-motorista.component';
import { ListagemMotoristaComponent } from './components/motorista/listagem-motorista/listagem-motorista.component';
import { CadastroVeiculoComponent } from './components/veiculos/cadastro-veiculo/cadastro-veiculo.component';
import { EditVeiculoComponent } from './components/veiculos/edit-veiculo/edit-veiculo.component';
import { ListagemVeiculoComponent } from './components/veiculos/listagem-veiculo/listagem-veiculo.component';
import { CadastroReservaComponent } from './components/reserva/cadastro-reserva/cadastro-reserva.component';
import { EditReservaComponent } from './components/reserva/edit-reserva/edit-reserva.component';
import { ListagemReservaComponent } from './components/reserva/listagem-reserva/listagem-reserva.component';
import { ListagemDiarioComponent } from './components/diario/listagem-diario/listagem-diario.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateContaComponent } from './components/create-conta/create-conta.component';
import { CadastroDiarioComponent } from './components/diario/cadastro-diario/cadastro-diario.component';
import { GaragemComponent } from './components/garagem/garagem.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-conta', component: CreateContaComponent },
  { path: 'motorista', children: [
    { path: 'cadastro', component: CadastroMotoristaComponent },
    { path: 'listagem', component: ListagemMotoristaComponent },
    { path: 'cadastro/edit/:id', component: EditMotoristaComponent }, 
  ]},
  { path: 'veiculo', children: [
    { path: 'cadastro', component: CadastroVeiculoComponent },
    { path: 'listagem', component: ListagemVeiculoComponent },
    { path: 'cadastro/edit/:id', component: EditVeiculoComponent }, 
  ]},
  { path: 'reserva', children: [
    { path: 'cadastro', component: CadastroReservaComponent },
    { path: 'listagem', component: ListagemReservaComponent },
    { path: 'cadastro/edit/:id', component: EditReservaComponent }, 
  ]},
  { path: 'diario', children: [
    { path: 'cadastro', component: CadastroDiarioComponent },
    { path: 'listagem', component: ListagemDiarioComponent },
  ]},
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'garagem', component: GaragemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
