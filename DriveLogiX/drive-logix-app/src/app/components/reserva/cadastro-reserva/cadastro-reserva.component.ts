import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from '../reserva';

@Component({
  selector: 'app-cadastro-reserva',
  templateUrl: './cadastro-reserva.component.html',
  styleUrls: ['./cadastro-reserva.component.scss']
})
export class CadastroReservaComponent implements OnInit {
  reserva: Reserva = {
    dtHoraReserva: new Date().toISOString(), 
    idReserva: 0, 
    idMotorista: null, 
    nomeMotorista: '',
    idVeiculo: null, 
    solicitanteReserva: '',
    rota: ''
  };
  nextIdReserva: number = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    if (reservas.length > 0) {
      const lastReserva = reservas[reservas.length - 1];
      this.nextIdReserva = lastReserva.idReserva + 1;
    }
  }

  createReserva() {
    const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');

    this.reserva.idReserva = this.nextIdReserva;

    reservas.push(this.reserva);

    localStorage.setItem('reservas', JSON.stringify(reservas));

    this.clearForm();

    alert('Reserva criada com sucesso');

    this.router.navigate(['/reserva/listagem']);
  }

  clearForm() {
    this.reserva = {
      dtHoraReserva: new Date().toISOString(),
      idReserva: 0,
      idMotorista: null,
      nomeMotorista: '',
      idVeiculo: null,
      solicitanteReserva: '',
      rota: '',
    };
  }

  parseDateTime() {
    this.reserva.dtHoraReserva = new Date(this.reserva.dtHoraReserva).toISOString();
  }
}
