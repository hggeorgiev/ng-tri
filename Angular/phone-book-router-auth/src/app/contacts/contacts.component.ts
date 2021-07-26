import { Component, ViewChild } from '@angular/core'
import { ContactDetailsComponent } from './contact-details.component';

@Component({
  selector: 'contacts',
  template: `
      <contacts-list></contacts-list>

      <a id="add" class="text-danger" [routerLink]="['/contacts', -1]"><span class="glyphicon glyphicon-plus"></span>Add</a>

      <contact-details></contact-details>
  `
})
export class ContactsComponent {
  @ViewChild(ContactDetailsComponent)
  private contactDetailsComponent: ContactDetailsComponent

  constructor() {
  }
}
