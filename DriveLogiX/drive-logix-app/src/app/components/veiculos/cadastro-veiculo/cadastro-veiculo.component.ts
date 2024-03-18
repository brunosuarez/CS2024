import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.scss']
})
export class CadastroVeiculoComponent implements OnInit {
  nextVeiculoId: number = 1;
  veiculo = {
    idVeiculo: 0,
    marcaVeiculo: '',
    placaVeiculo: '',
    modeloVeiculo: '',
    anoVeiculo: undefined,
    quilometragemVeiculo: undefined,
    statusVeiculo: '',
    garagem: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    const veiculos = JSON.parse(localStorage.getItem('veiculos') || '[]');
    if (veiculos.length > 0) {
      const lastVeiculo = veiculos[veiculos.length - 1];
      this.nextVeiculoId = lastVeiculo.idVeiculo + 1;
    }
  }

  createVeiculo() {
    const veiculos = JSON.parse(localStorage.getItem('veiculos') || '[]');

    this.veiculo.idVeiculo = this.nextVeiculoId;

    veiculos.push(this.veiculo);

    localStorage.setItem('veiculos', JSON.stringify(veiculos));

    this.clearForm();

    alert('Veiculo criado com sucesso');

    this.router.navigate(['/veiculo/listagem']);
  }

  clearForm() {
    this.veiculo = {
      idVeiculo: 0,
      marcaVeiculo: '',
      placaVeiculo: '',
      modeloVeiculo: '',
      anoVeiculo: undefined,
      quilometragemVeiculo: undefined,
      statusVeiculo: '',
      garagem: ''
    };
  }
}
