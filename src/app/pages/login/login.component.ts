import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Credentials } from './credentials';
import { Store, Action, combineReducers } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppActions } from '../../app.actions';
import { AppState } from '../../app.state';
import { PageComponent } from '../../components/page.component';
import { User } from '../../models/user';
import { userReducer } from '../../reducers/user.reducer';

@Component({
  selector: 'login',
  styleUrls: [ './login.component.css' ],
  templateUrl: './login.component.html',
  providers: [LoginService]
})
export class LoginComponent extends PageComponent implements OnInit {
  private showWrongCredentialsAlert: boolean = false;
  private credentials: Credentials = new Credentials();
  private counter: number;
  private user: User;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private appActions: AppActions,
    private store: Store<AppState>) {
    super(store, userReducer);
  }

  public ngOnInit() {
    this._subscriptions([
      this.store.select('user').subscribe((user: User) => this.user = user),
    ]);
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
