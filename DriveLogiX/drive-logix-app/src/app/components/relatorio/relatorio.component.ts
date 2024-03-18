import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss'],
})
export class RelatorioComponent {
  campaignOne: any = {};
  campaignTwo: any = {};
  idVeiculo: number | undefined;
  relatorio: any = null;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('pt-BR');
  }

  gerarRelatorio() {
    const exemploReservas = [
      {
        idReserva: 1,
        dtHoraReserva: '2023-10-01T10:00:00',
        nomeMotorista: 'Motorista 1',
        solicitanteReserva: 'Solicitante 1',
        rota: 'Rota 1',
      },
      {
        idReserva: 2,
        dtHoraReserva: '2023-10-02T11:30:00',
        nomeMotorista: 'Motorista 2',
        solicitanteReserva: 'Solicitante 2',
        rota: 'Rota 2',
      },
    ];

    const exemploDiarios = [
      {
        dtHoraInicio: new Date('2023-10-17T10:00:00'),
        dtHoraTermino: new Date('2023-10-17T12:00:00'),
        localPartida: 'Local de Partida 1',
        localDestino: 'Local de Destino 1',
        qtdeParadas: 3,
        quilometragemPercorrida: 120,
        observacoes: 'Observações 1',
      },
      {
        dtHoraInicio: new Date('2023-10-17T13:00:00'),
        dtHoraTermino: new Date('2023-10-17T15:30:00'),
        localPartida: 'Local de Partida 2',
        localDestino: 'Local de Destino 2',
        qtdeParadas: 2,
        quilometragemPercorrida: 150,
        observacoes: 'Observações 2',
      },
    ];


    const dataInicial = this.campaignOne.start;
    const dataFinal = this.campaignOne.end;
    const idVeiculo = this.idVeiculo;

    const reservasFiltradas = exemploReservas.filter((reserva) => {
      const dataReserva = new Date(reserva.dtHoraReserva);
      return (
        dataReserva >= dataInicial &&
        dataReserva <= dataFinal 
      );
    });

    const diariosFiltrados = exemploDiarios.filter((diario) => {
      const dataDiarioInicio = new Date(diario.dtHoraInicio);
      const dataDiarioTermino = new Date(diario.dtHoraTermino);
      return (
        dataDiarioInicio >= dataInicial &&
        dataDiarioTermino <= dataFinal
      );
    });

    const relatorio = {
      reservas: reservasFiltradas,
      diarios: diariosFiltrados,
    };

    this.relatorio = relatorio;
  }

  startDateSelected(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.campaignOne.start = event.value;
    }
  }

  endDateSelected(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.campaignOne.end = event.value;
    }
  }

  startTwoDateSelected(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.campaignTwo.start = event.value;
    }
  }

  endTwoDateSelected(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.campaignTwo.end = event.value;
    }
  }
}
