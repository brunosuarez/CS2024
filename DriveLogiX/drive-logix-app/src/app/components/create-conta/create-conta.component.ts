import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-conta',
  templateUrl: './create-conta.component.html',
  styleUrls: ['./create-conta.component.scss'],
})
export class CreateContaComponent {
  inputDisabled = false;
  novoUsuario = {
    nome: '',
    email: '',
    cpf: null,
    setor: '',
    gerente: '',
    senha: '',
  };
  contaCriada = false;

  constructor(private router: Router) {}

  salvarConta() {
    const usuariosString = localStorage.getItem('usuarios');
    const usuarios = usuariosString ? JSON.parse(usuariosString) : [];

    const novoUsuario = { ...this.novoUsuario };

    usuarios.push(novoUsuario);
    console.log(novoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    this.contaCriada = true;

    window.alert('Sua conta foi criada com sucesso!');

    this.router.navigate(['/login']);
  }

  disabledInputGerente(): void {
    this.inputDisabled = !this.inputDisabled;
  }
}
