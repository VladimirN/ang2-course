import { Component, ViewEncapsulation } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <div *ngIf="isHidden">
      {{userName}}
      <button type="button" class="btn" (click)="logout()">LogOut</button>
    </div>
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
