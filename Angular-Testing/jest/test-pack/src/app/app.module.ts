import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GreeterComponent} from "./components/greeter.component";
import {PersonsDetailsComponent} from "./components/details.component";
import {AboutComponent} from "./components/about.component";
import {Route, RouterModule} from "@angular/router";

let routes: Route[] = [
  {path: '',       component: PersonsDetailsComponent, pathMatch: "full" },
  {path: 'about',  component: AboutComponent},
  {path: '**',     redirectTo: "/" }
]


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes, {useHash: true}) ],
  declarations: [ AppComponent, GreeterComponent, PersonsDetailsComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
