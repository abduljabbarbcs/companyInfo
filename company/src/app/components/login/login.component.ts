import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginData:any={'api_key':'',"password":''};
  private returnUrl:string;
  private isError:boolean = false;
  private errorMsg:string;
  private environment:string;
  private environments:Array<string>;
  constructor(private authService:AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) {
              this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit() {
  }

  login(){
    let self = this;
    self.isError =false;
    if(!this.loginData.username) {
      self.isError = true;
      self.errorMsg = "Please Enter API KEY.";
      return
    }
    else if(!this.loginData.password){
      self.isError = true;
      self.errorMsg = "Please Enter Password.";
      return
    }
    self.authService.login(this.loginData.username,this.loginData.password).subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    self.isError=true;
                    self.errorMsg = "Incorrect username or password."
                });
    }

}
