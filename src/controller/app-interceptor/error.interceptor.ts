import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  /**
   * Handle error for each request
   *
   * @param request
   * @param next
   * @returns
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.authService.logout();
          location.reload();
        }
        const error = err?.error?.message || err?.statusText;
        return throwError(error);
      })
    );
  }
}
