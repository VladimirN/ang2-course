import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { Store, Action, combineReducers } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppActions } from '../../app.actions';
import { AppState } from '../../app.state';
import { PageComponent } from '../../components/page.component';
import { userReducer } from '../../reducers/user.reducer';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent extends PageComponent implements OnInit {
  public user: User;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private appActions: AppActions,
    private store: Store<AppState>) {
    super(store, userReducer);
  }

  ngOnInit() {
    this._subscriptions([
      this.store.select('user').subscribe((user: User) => this.user = user),
    ]);
  }

  logout(name: string) {
    this.appActions.dispatch(AppActions.LOG_OUT, null);
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
