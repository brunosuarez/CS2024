import { Component } from '@angular/core';

@Component({
  selector: 'app-garagem',
  templateUrl: './garagem.component.html',
  styleUrls: ['./garagem.component.scss']
})
export class GaragemComponent {
  patios: { nome: string, totalVagas: number }[] = [
    { nome: 'Central', totalVagas: 100 },
    { nome: 'Sec. Saúde', totalVagas: 50 },
    { nome: 'Sec. Educação', totalVagas: 80 },
    { nome: 'Sec. Meio Ambiente', totalVagas: 120 },
    { nome: 'Obras', totalVagas: 70 },
    { nome: 'Hospital', totalVagas: 150 },
    { nome: 'Prefeitura', totalVagas: 200 }
  ];
  patio: string = '';
  totalVagas: number = 0;
  vagasOcupadas: number = 0;

  constructor() { }

  get vagasLivres(): number {
    return this.totalVagas - this.vagasOcupadas;
  }

  onPatioSelectionChange() {
    const selectedPatio = this.patios.find(p => p.nome === this.patio);
    if (selectedPatio) {
      this.totalVagas = selectedPatio.totalVagas;
    } else {
      this.totalVagas = 0;
    }
  }
}



