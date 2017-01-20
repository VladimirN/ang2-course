import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Credentials } from './credentials';
import { Store, Action, combineReducers } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppActions } from '../../app.actions';
import { PageComponent } from '../../components/page.component';
import { loginReducers } from '../../reducers/login.reducer';

@Component({
  selector: 'login',
  styleUrls: [ './login.component.css' ],
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent extends PageComponent {
  private showWrongCredentialsAlert: boolean = false;
  private credentials: Credentials = new Credentials();

  constructor(
    private router: Router,
    private loginService: LoginService,
    private appActions: AppActions,
    private store: Store<any>) {
    super(store, loginReducers);
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
        this.appActions.dispatch(AppActions.LOG_IN, user);
        this.router.navigate(['./courses']);
      } else {
        this.credentials.password = '';
        this.credentials.login = '';
        this.showWrongCredentialsAlert = true;
      }
    });
  }
}
