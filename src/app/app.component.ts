import { Component, ViewEncapsulation } from '@angular/core';
import { LoginService } from './services/login.service';
import { ErrorNotifierService } from './services/error-notifier.service';
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


    <div class="error-global" *ngIf="error">{{ error }}</div>

    <footer>
    </footer>
  `
})
export class AppComponent {
  public userName: string;
  public isHidden: boolean;
  private error: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private errorNotifier: ErrorNotifierService) {
      this.errorNotifier.onError(err => {
        this.error = err;
        setTimeout(() => this.error = null, 10000);
        console.log(err);
      });
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
