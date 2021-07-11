import { CanDeactivate } from '@angular/router';
import { Observable } from "rxjs/index";
import { Injectable } from "@angular/core";


export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean>
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
