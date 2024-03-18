import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Motorista } from '../motorista';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-motorista',
  templateUrl: './edit-motorista.component.html',
  styleUrls: ['./edit-motorista.component.scss']
})
export class EditMotoristaComponent implements OnInit {
  motorista: Motorista = {} as Motorista;
  idMotorista: number | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  categoriasCNH: string[] = ['A', 'B', 'C', 'D', 'E'];
  setores: string[] = [
    'Saúde', 'Educação', 'Meio Ambiente', 'Agricultura', 'Cultura e Esporte', 'Turismo', 'Comunicação', 'Segurança', 'Obras'
  ];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const motoristaIdParam = params.get('id');

      if (motoristaIdParam) {
        this.idMotorista = +motoristaIdParam;
        this.loadMotoristaFromLocalStorage();
      }
    });
  }

  loadMotoristaFromLocalStorage() {
    const motoristas = JSON.parse(localStorage.getItem('motoristas') || '[]');
    const motoristaToEdit = motoristas.find((m: { idMotorista: number | undefined; }) => m.idMotorista === this.idMotorista);

    if (motoristaToEdit) {
      this.motorista = { ...motoristaToEdit };
    }
  }

  updateMotorista() {
    const motoristas = JSON.parse(localStorage.getItem('motoristas') || '[]');

    const index = motoristas.findIndex((m: { idMotorista: number | undefined; }) => m.idMotorista === this.idMotorista);

    if (index !== -1) {
      motoristas[index] = { ...this.motorista };
      localStorage.setItem('motoristas', JSON.stringify(motoristas));

      alert('Motorista atualizado com sucesso');
      this.router.navigate(['/motorista/listagem']);
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      console.log('Arquivo selecionado:', selectedFile.name);
    }
  }

  cancelEdit() {
    this.router.navigate(['/motorista/listagem']);
  }
}
