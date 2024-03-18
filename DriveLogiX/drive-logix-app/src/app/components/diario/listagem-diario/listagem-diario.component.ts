import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface DiarioElement {
  dtHoraInicio: Date;
  dtHoraTermino: Date;
  localPartida: string;
  localDestino: string;
  qtdeParadas: number;
  quilometragemPercorrida: number;
  observacoes: string;
  idVeiculo: number;
  idMotorista: number;
}

@Component({
  selector: 'app-listagem-diario',
  templateUrl: './listagem-diario.component.html',
  styleUrls: ['./listagem-diario.component.scss']
})
export class ListagemDiarioComponent implements OnInit {
  displayedColumns: string[] = ['qtdeParadas', 'quilometragemPercorrida', 'observacoes', 'idVeiculo', 'idMotorista'];
  dataSource = new MatTableDataSource<DiarioElement>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadDiariosFromLocalStorage();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadDiariosFromLocalStorage() {
    const diarios = JSON.parse(localStorage.getItem('diarios') || '[]');
    this.dataSource.data = diarios;
  }
}
