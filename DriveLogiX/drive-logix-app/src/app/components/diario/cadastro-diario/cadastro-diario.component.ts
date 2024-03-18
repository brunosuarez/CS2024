import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diario } from '../diario';

@Component({
  selector: 'app-cadastro-diario',
  templateUrl: './cadastro-diario.component.html',
  styleUrls: ['./cadastro-diario.component.scss']
})

export class CadastroDiarioComponent implements OnInit {
  diario: Diario = { 
    idDiario: 0,
    dtHoraInicio: new Date().toISOString(),
    dtHoraTermino: new Date().toISOString(),
    localPartida: '',
    localDestino: '',
    qtdeParadas: null, 
    quilometragemPercorrida: null,
    observacoes: '',
    idVeiculo: null, 
    idMotorista: null, 
  };

  nextIdDiario: number = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const diarios = JSON.parse(localStorage.getItem('diarios') || '[]');
    if (diarios.length > 0) {
      const lastDiario = diarios[diarios.length - 1];
      this.nextIdDiario = lastDiario.idDiario + 1;
    }
  }

  cadastrarDiario() {
    const diarios = JSON.parse(localStorage.getItem('diarios') || '[]');

    this.diario.idDiario = this.nextIdDiario; 
    diarios.push(this.diario);

    localStorage.setItem('diarios', JSON.stringify(diarios));

    this.limparFormulario();

    alert('Diário de Bordo criado com sucesso');

    this.router.navigate(['/diario/listagem']);
  }

  limparFormulario() {
    this.diario = {
      idDiario: 0,
      dtHoraInicio: new Date().toISOString(),
      dtHoraTermino: new Date().toISOString(),
      localPartida: '',
      localDestino: '',
      qtdeParadas: null, 
      quilometragemPercorrida: null, 
      observacoes: '',
      idVeiculo: null, 
      idMotorista: null,
    };
  }

  parseDateTime() {
    this.diario.dtHoraInicio = new Date(this.diario.dtHoraInicio).toISOString();
    this.diario.dtHoraTermino = new Date(this.diario.dtHoraTermino).toISOString();
  }
}
