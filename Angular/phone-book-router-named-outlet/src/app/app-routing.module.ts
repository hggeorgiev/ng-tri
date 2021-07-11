

import { NgModule }                 from '@angular/core'
import { RouterModule, Routes }     from '@angular/router'
import { AboutComponent }           from './about/about.component'

const routes: Routes = [
  { path: 'contacts', loadChildren: () => import('src/app/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
]

@NgModule({
  imports:      [ RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }) ],
  exports:      [ RouterModule ]
})
export class AppRoutingModule {}