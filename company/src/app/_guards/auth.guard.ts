/**
 * Created by frt on 4/2/18.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    private token_time_limit:number= 3500;
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log(state,route)
        let token_creation_time =  Number(localStorage.getItem("company_token_start_time"))
        let current_time = new Date().getTime() / 1000;
        if (localStorage.getItem('auth') && ((current_time -token_creation_time) < this.token_time_limit)) {
            // logged in so return true
          if(state.url != '/')
            return true;
          else
            this.router.navigate(['company'], { });
        }
        if(state.url == '/')
          return true;
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
