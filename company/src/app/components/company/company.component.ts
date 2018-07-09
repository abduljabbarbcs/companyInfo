import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../_services/api.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
private tab = 'project';
   private clients:any;
  private projects:any;
  private employees:any;
  private showAddForm = false;
  private project={'name':'', 'description':''};
  private client={'name':'', 'description':''};
  private employee={'name':'', 'description':''};
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
  private saveProject = function () {
      let self = this;
      self.isError =false;
      if(!this.project.name) {
        alert('Please Enter project name')
        return
      }

      self.apiService.addProject(self.project).subscribe(
                  data => {
                      self.showAddForm = false
                    self.fetchProjects()
                  },
                  error => {
                    alert(error)
                });
    }
    private saveClient = function () {
      let self = this;
      if(!this.client.name) {
        alert('Please Enter Client name')
        return
      }

      self.apiService.addClient(self.client).subscribe(
                  data => {
                      self.showAddForm = false;
                      self.fetchClients()
                  },
                  error => {
                      alert(error)
                  });
    }
    private saveEmployee = function () {
      let self = this;
      self.isError =false;
      if(!this.employee.name) {
        alert('Please Enter Employee name')
        return
      }

      self.apiService.addEmployee(self.employee).subscribe(
                  data => {
                      self.showAddForm = false
                      self.fetchEmployees()
                  },
                  error => {
                      alert(error)
                  });
      }
   updateProject = function (entry) {
    let self=this;
      self.apiService.updateProject(entry['id'],entry).subscribe(
                  data => {
                      self.fetchProjects()
                  },
                  error => {
                      alert(error)
                  });
  }
  updateClient = function (entry) {
       let self=this;
      self.apiService.updateClient(entry['id'],entry).subscribe(
                  data => {
                      self.fetchClients()
                  },
                  error => {
                      alert(error)
                  });
  }
  updateEmployee = function (entry) {
    let self=this;
     self.apiService.updateEmployee(entry['id'],entry).subscribe(
                  data => {
                      self.fetchEmployees()
                  },
                  error => {
                      alert(error)
                  });
  }
 }
