import { Injectable } from "@angular/core"
import { Contact } from "./contact"
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ContactsService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Contact[]>(`${environment.apiUrl}/users`);
  }
}
