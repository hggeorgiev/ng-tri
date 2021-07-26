
import {APP_INITIALIZER, NgModule} from '@angular/core'
import { BrowserModule }        from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent }         from './app.component'
import { ContactsComponent }    from './contacts/contacts.component'
import { ContactsListComponent } from './contacts/contacts-list.component'
import { ContactDetailsComponent } from './contacts/contact-details.component'
import { AboutComponent }         from './about/about.component'

import { AppRoutingModule }     from './app-routing.module';
import {ErrorInterceptor} from "./error.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {appInitializer} from "./app-initializer";
import {AuthenticationService} from "./authentication/authentication.service";
import {JwtInterceptor} from "./jwt.interceptor";
import {LoginComponent} from "./authentication/login.component";
import {HeaderComponent} from "./header.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, ContactsComponent, ContactsListComponent, ContactDetailsComponent, AboutComponent, LoginComponent, HeaderComponent],
  bootstrap:    [ AppComponent, HeaderComponent ],
  providers:    [  { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthenticationService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]
})
export class AppModule {}
