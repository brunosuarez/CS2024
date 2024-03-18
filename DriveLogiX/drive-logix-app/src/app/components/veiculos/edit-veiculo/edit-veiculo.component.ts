import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Veiculo } from '../veiculo';

@Component({
  selector: 'app-edit-veiculo',
  templateUrl: './edit-veiculo.component.html',
  styleUrls: ['./edit-veiculo.component.scss']
})

export class EditVeiculoComponent implements OnInit {
  veiculo: Veiculo = {} as Veiculo; 
  idVeiculo: number | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const veiculoIdParam = params.get('id');

      if (veiculoIdParam) {
        this.idVeiculo = +veiculoIdParam;
        this.loadVeiculoFromLocalStorage();
      }
    });
  }

  loadVeiculoFromLocalStorage() {
    const veiculos = JSON.parse(localStorage.getItem('veiculos') || '[]');
    const veiculoToEdit = veiculos.find((v: { idVeiculo: number | undefined; }) => v.idVeiculo === this.idVeiculo);

    if (veiculoToEdit) {
      this.veiculo = { ...veiculoToEdit };
    }
  }

  updateVeiculo() {
    const veiculos = JSON.parse(localStorage.getItem('veiculos') || '[]');

    const index = veiculos.findIndex((v: { idVeiculo: number | undefined; }) => v.idVeiculo === this.idVeiculo);

    if (index !== -1) {
      veiculos[index] = { ...this.veiculo };
      localStorage.setItem('veiculos', JSON.stringify(veiculos));

      alert('Veiculo atualizado com sucesso!');
      this.router.navigate(['/veiculo/listagem']);
    }
  }

  cancelEdit() {
    this.router.navigate(['/veiculo/listagem']);
  }
}
