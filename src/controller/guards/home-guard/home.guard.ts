import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { AuthService } from 'src/controller/service/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean| UrlTree {
    const loggedInCall = this.authService.isLoggedIn();
    return Promise.all([loggedInCall]).then((values) => {
      const loggedIn = values[0];
      if (!loggedIn) {
        this.router.navigateByUrl('/auth');
      }
      return true;
    });
  }
}
