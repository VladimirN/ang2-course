import { Component, ViewEncapsulation } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <app-header></app-header>
    <breadcrumbs></breadcrumbs>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
    </footer>
  `
})
export class AppComponent {
  public userName: string;
  public isHidden: boolean;

  constructor(private loginService: LoginService, private router: Router) {
  }

  logout(name: string) {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.userName = this.loginService.getUser();
    this.isHidden = !this.loginService.isLoggedIn();
  }
}
