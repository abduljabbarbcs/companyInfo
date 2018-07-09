import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

   constructor(private http: HttpClient,
                private router:Router) { }

    login(api_key: string, password: string) {
        let formData:FormData = new FormData();
        formData.append("username", api_key);
        formData.append("password", password);
        return this.http.post<any>('api/v1/auth/', formData)
            .map(token => {
                // login successful if there's a jwt token in the response
                if (token && token.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('auth', JSON.stringify(token));
                    localStorage.setItem('company_token_start_time', JSON.stringify(new Date().getTime() / 1000));
                }

                return token;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('auth');
        this.router.navigate(['/login']);

    }

}
