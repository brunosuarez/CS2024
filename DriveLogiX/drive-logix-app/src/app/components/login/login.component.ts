import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  hide = true;
  email: string = '';
  senha: string = '';

  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  fazerLogin() {
    const email = this.email.trim();
    const senha = this.senha.trim();

    const usuariosString = localStorage.getItem('usuarios');
    const usuarios = this.parseUsuarios(usuariosString);

    const usuario = this.encontrarUsuario(usuarios, email, senha);

    if (usuario) {
      alert('Login Bem-Sucedido!');
      localStorage.setItem('usuarioLogado', 'true');
      localStorage.setItem('emailUsuario', email);
      this.router.navigate(['/home']);
    } else {
      alert('Credenciais de login incorretas.');
    }
  }

  encontrarUsuario(usuarios: any[], email: string, senha: string) {
    return usuarios.find((u: any) => u.email === email && u.senha === senha);
  }

  parseUsuarios(usuariosString: string | null): any[] {
    try {
      if (usuariosString) {
        return JSON.parse(usuariosString);
      }
    } catch (error) {
      console.error('Erro ao analisar JSON do localStorage:', error);
    }
    return [];
  }
}
