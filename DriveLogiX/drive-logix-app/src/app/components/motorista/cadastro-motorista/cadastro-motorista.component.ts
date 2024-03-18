
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Motorista } from '../motorista';
import { ValidarNomeDirective } from  '../../../directives/validatorName';

@Component({
  selector: 'app-cadastro-motorista',
  templateUrl: './cadastro-motorista.component.html',
  styleUrls: ['./cadastro-motorista.component.scss']
})
export class CadastroMotoristaComponent implements OnInit {
  motorista: Motorista = {} as Motorista;
  nextMotoristaId: number = 1;
  pattern: string = '';

  categoriasCNH: string[] = ['A', 'B', 'C', 'D', 'E'];
  setores: string[] =
    [
      'Saúde', 'Educação', 'Meio Ambiente', 'Agricultura', 'Cultura e Esporte', 'Turismo', 'Comunicação', 'Segurança', 'Obras'
    ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const motoristas = JSON.parse(localStorage.getItem('motoristas') || '[]');
    if (motoristas.length > 0) {
      const lastMotorista = motoristas[motoristas.length - 1];
      this.nextMotoristaId = lastMotorista.idMotorista + 1;
    }
  }

  createMotorista() {
    const motoristas = JSON.parse(localStorage.getItem('motoristas') || '[]');

    this.motorista.idMotorista = this.nextMotoristaId;

    motoristas.push(this.motorista);

    localStorage.setItem('motoristas', JSON.stringify(motoristas));

    this.clearForm();

    alert('Motorista criado com sucesso!');

    this.router.navigate(['/motorista/listagem']);
  }

  clearForm() {
    this.motorista = {} as Motorista;
  }
  

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.motorista.foto = reader.result as string;
      };
    }
  }
  
}

