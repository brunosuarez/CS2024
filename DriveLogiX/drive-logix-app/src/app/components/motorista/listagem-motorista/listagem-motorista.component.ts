import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface MotoristaElement {
  nomeMotorista: string;
  numCNH: string;
  categoriaCNH: string;
  setor: string;
  gerente: string;
}

@Component({
  selector: 'app-listagem-motorista',
  templateUrl: './listagem-motorista.component.html',
  styleUrls: ['./listagem-motorista.component.scss']
})

export class ListagemMotoristaComponent implements OnInit {
  displayedColumns: string[] = ['nomeMotorista', 'numCNH', 'categoriaCNH', 'setor', 'gerente', 'edit'];
  dataSource = new MatTableDataSource<MotoristaElement>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadMotoristasFromLocalStorage();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadMotoristasFromLocalStorage() {
    const motoristas = JSON.parse(localStorage.getItem('motoristas') || '[]');
    this.dataSource.data = motoristas;
  }

  editMotorista(idMotorista: number) {
    if (idMotorista !== null && idMotorista !== undefined) {
      this.router.navigate(['/motorista/cadastro/edit', idMotorista]);
    } else {
      console.error('ID de motorista inválido:', idMotorista);
    }
  }
}
