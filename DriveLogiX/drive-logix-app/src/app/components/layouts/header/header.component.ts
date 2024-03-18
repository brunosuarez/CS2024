import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  usuarioLogado: boolean = false;
  emailUsuario: string = '';

  constructor() { }

  ngOnInit(): void {
    const emailUsuario = localStorage.getItem('emailUsuario');
    if (emailUsuario) {
      this.usuarioLogado = true;
      this.emailUsuario = emailUsuario;
    }
  }

  sairConta(): void {
    localStorage.removeItem('emailUsuario');
    this.usuarioLogado = false;
    this.emailUsuario = '';
  }
}

