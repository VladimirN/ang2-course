import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';



@Injectable()

export class LoggedInGuard implements CanActivate {
  constructor(private user: LoginService, private router: Router) {}

  canActivate() {
    if (this.user.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
