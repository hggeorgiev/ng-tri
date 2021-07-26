import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationService} from "./authentication/authentication.service";
import {Router} from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(errorResponse => {
      if ([401, 403, 500].includes(errorResponse.status) && this.authenticationService.userValue) {
        this.authenticationService.logout();
      }

      if ([401, 403, 500].includes(errorResponse.status) && this.authenticationService.userValue === null) {
        this.router.navigate(['/login']);
      }

      const error = (errorResponse && errorResponse.error && errorResponse.error.message) || errorResponse.statusText;
      console.error(errorResponse);
      return throwError(error);
    }))
  }
}
