import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';

import { AuthService } from 'src/controller/service/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const loggedInCall = this.authService.isLoggedIn();
    return Promise.all([loggedInCall]).then((values) => {
      const loggedIn = values[0];
      if (loggedIn) {
        this.router.navigateByUrl('/home');
        return false;
      }
      return true;
    });
  }
}
