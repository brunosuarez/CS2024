import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

import { CadastroMotoristaComponent } from './components/motorista/cadastro-motorista/cadastro-motorista.component';
import { EditMotoristaComponent } from './components/motorista/edit-motorista/edit-motorista.component';
import { ListagemMotoristaComponent } from './components/motorista/listagem-motorista/listagem-motorista.component';
import { CadastroVeiculoComponent } from './components/veiculos/cadastro-veiculo/cadastro-veiculo.component';
import { EditVeiculoComponent } from './components/veiculos/edit-veiculo/edit-veiculo.component';
import { ListagemVeiculoComponent } from './components/veiculos/listagem-veiculo/listagem-veiculo.component';
import { CadastroReservaComponent } from './components/reserva/cadastro-reserva/cadastro-reserva.component';
import { EditReservaComponent } from './components/reserva/edit-reserva/edit-reserva.component';
import { ListagemReservaComponent } from './components/reserva/listagem-reserva/listagem-reserva.component';
import { CadastroDiarioComponent } from './components/diario/cadastro-diario/cadastro-diario.component';
import { ListagemDiarioComponent } from './components/diario/listagem-diario/listagem-diario.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { LoginComponent } from './components/login/login.component';
import { CreateContaComponent } from './components/create-conta/create-conta.component';

import { SidenavComponent } from './components/layouts/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidarNomeDirective } from './directives/validatorName';
import { ValidarNumeroDirective } from './directives/validatorNumber';
import { ValidarPlacaDirective } from './directives/validatorPlaca';
import { GaragemComponent } from './components/garagem/garagem.component';

@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AppComponent,
    CadastroMotoristaComponent,
    EditMotoristaComponent,
    ListagemMotoristaComponent,
    CadastroVeiculoComponent,
    ListagemVeiculoComponent,
    EditVeiculoComponent,
    CadastroReservaComponent,
    EditReservaComponent,
    ListagemReservaComponent,
    CadastroDiarioComponent,
    ListagemDiarioComponent,
    RelatorioComponent,
    LoginComponent,
    CreateContaComponent,
    ValidarNomeDirective,
    ValidarNumeroDirective,
    ValidarPlacaDirective,
    GaragemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    SlickCarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
