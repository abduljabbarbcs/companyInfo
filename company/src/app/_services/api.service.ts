import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService {

  constructor(
    private http:HttpClient) { }

   getProjects() {
        return this.http.get<any>('api/v1/project')
            .map(res => {
                return res;
            });
    }
    getClients() {
        return this.http.get<any>('api/v1/client')
            .map(res => {
                return res;
            });
    }
    getEmployees() {
        return this.http.get<any>('api/v1/employee')
            .map(res => {
                return res;
            });
    }

    addProject(data) {

        return this.http.post<any>('api/v1/project/', data)
            .map(response => {

                return response;
            });
    }
    addClient(data) {

        return this.http.post<any>('api/v1/client/', data)
            .map(response => {

                return response;
            });
    }
    addEmployee(data) {
        return this.http.post<any>('api/v1/employee/', data)
            .map(response => {
                return response;
            });
    }
    updateEmployee(id, data) {
      let url=  'api/v1/employee/'+ id +'/'
        return this.http.put<any>(url, {'name':data['name'],'description':data['description']})
            .map(response => {
                return response;
            });
    }updateClient(id, data) {
      let url=  'api/v1/client/'+ id +'/'
        return this.http.put<any>(url, {'name':data['name'],'description':data['description']})
            .map(response => {
                return response;
            });
    }updateProject(id, data) {
      let url=  'api/v1/project/'+ id +'/'
        return this.http.put<any>(url, {'name':data['name'],'description':data['description']})
            .map(response => {
                return response;
            });
    }

}
