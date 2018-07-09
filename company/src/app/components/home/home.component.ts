import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../_services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private tab = 'project';
  private clients:any;
  private projects:any;
  private employees:any;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.fetchProjects()
    this.fetchEmployees()
    this.fetchClients()
  }
  private fetchClients = function () {
    let self = this;
    self.apiService.getClients().subscribe(
                data => {
                  self.clients = data;
                },
                error => {

                });
  }
  private fetchProjects= function () {
    let self = this;
    self.apiService.getProjects().subscribe(
                data => {
                  self.projects = data;
                },
                error => {

                });
  }
  private fetchEmployees = function () {
    let self = this;
    self.apiService.getEmployees().subscribe(
            data => {
              self.employees = data;
            },
            error => {

            });
  }


}
