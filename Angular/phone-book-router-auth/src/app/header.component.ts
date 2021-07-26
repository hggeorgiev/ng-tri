import { Component } from '@angular/core'
import {AuthenticationService} from "./authentication/authentication.service";
import {Contact} from "./contacts/contact";

@Component({
  selector: 'app-header',
  template: `
    <div class="container">
      <a href="#/" class="logo col-xs-3"><img id="logo" style="height: 4em;" src="assets/img/logo.png"
                                              alt="ITCE"/></a>
      <div class="text-right navbar-brand col-xs-9">
        <ul class="header-links list-inline" *ngIf="user">
          <li class="hidden-xs">Hello {{user.firstName}}</li>
          <li class="hidden-xs text-muted small">|</li>
          <li><a class="btn btn-danger small text-small-caps" (click)="logout()">
            <span class="glyphicon glyphicon-log-out"></span> Exit
          </a></li>
        </ul>
      </div>
    </div>

    `
})
export class HeaderComponent {
  user: Contact;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.authenticationService.logout();
  }
}
