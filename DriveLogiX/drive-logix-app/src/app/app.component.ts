import { Component } from '@angular/core';
import { AuthService } from './app.component.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  isLoginPage() {
    return this.router.url === '/login';
  }

  isCreateContaPage() {
    return this.router.url === '/create-conta';
  }
}
