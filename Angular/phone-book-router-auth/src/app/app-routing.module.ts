import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ContactsComponent }    from './contacts/contacts.component'
import { AboutComponent }       from './about/about.component'
import {AuthenticationGuard} from "./authentication/authentication.guard";
import {LoginComponent} from "./authentication/login.component";

const routes: Routes = [
  { path: 'contacts',       component: ContactsComponent,  canActivate: [AuthenticationGuard]  },
  { path: 'contacts/:id',   component: ContactsComponent, canActivate: [AuthenticationGuard] },
  { path: 'about',          component: AboutComponent },
  { path: '',               redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports:      [ RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }) ],
  exports:      [ RouterModule ],
})
export class AppRoutingModule {}
