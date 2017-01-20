import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Credentials } from './credentials';

@Component({
  selector: 'login',
  styleUrls: [ './login.component.css' ],
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent {
  private showWrongCredentialsAlert: boolean = false;
  private credentials: Credentials = new Credentials();

  constructor(private router: Router, private loginService: LoginService) {
  }

  public ngOnInit() {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  public logIn(): void {
    this.loginService
    .login(this.credentials.login, this.credentials.password)
    .subscribe(user => {
      if (user) {
        this.router.navigate(['./courses']);
      } else {
        this.credentials.password = '';
        this.credentials.login = '';
        this.showWrongCredentialsAlert = true;
      }
    });
  }
}