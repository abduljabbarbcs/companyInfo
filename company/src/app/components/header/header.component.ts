import {Component, OnInit, Input} from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  private islogin:any;
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }
  logout = function () {
    this.authenticationService.logout();
  }

}
