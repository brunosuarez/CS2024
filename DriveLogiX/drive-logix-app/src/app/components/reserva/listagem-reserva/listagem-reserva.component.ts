import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface ReservaElement {
  dtHoraReserva: string;
  solicitanteReserva: string;
  idVeiculo: number;
  nomeMotorista: string;
  rota: string;
  statusReserva: string;
}

@Component({
  selector: 'app-listagem-reserva',
  templateUrl: './listagem-reserva.component.html',
  styleUrls: ['./listagem-reserva.component.scss']
})

export class ListagemReservaComponent implements OnInit {
  displayedColumns: string[] = ['dtHoraReserva', 'solicitanteReserva', 'idVeiculo', 'nomeMotorista', 'rota', 'edit'];
  dataSource = new MatTableDataSource<ReservaElement>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadReservasFromLocalStorage();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadReservasFromLocalStorage() {
    const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
    this.dataSource.data = reservas;
  }

  editReserva(idReserva: number) {
    if (idReserva !== null && idReserva !== undefined) {
      this.router.navigate(['/reserva/cadastro/edit', idReserva]);
    } else {
      console.error('ID de reserva inválido:', idReserva);
    }
  }
}
