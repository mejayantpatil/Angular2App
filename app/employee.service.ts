import { Injectable } from '@angular/core';
import { Employees } from './employees';
import { Employee} from './employee';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EmployeeService {
  private employees:Employee[]=Employees;
  constructor(private http: Http){}
  getEmployees() {
	//
	// This is implementation of promise over http service 
	return this.http.get('api/employees.json')
	.toPromise()
	.then(response => {
		this.employees = response.json();
		return response.json();//Promise.resolve(response.json() as Employee[]);
		})
    .catch(this.handleError);
	//for direct resolving promises here
    //return Promise.resolve(this.employees);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  getEmployee(id:number) {
	return this.getEmployees()
               .then(employees => employees.find(employee => employee.id === id));
  }
  setEmployee(data) {
	  this.employees.push(new Employee(data.id,data.firstName,data.lastName,data.emailId));
	  return this.employees;	
  }
  updateEmployee(selectedEmployee, employee){
	  let index = this.employees.indexOf(selectedEmployee);
	  this.employees[index] =new Employee(employee.id,employee.firstName,employee.lastName,employee.emailId);
		
  }
  deleteEmployee(employee) {
	  this.employees.splice(this.employees.indexOf(employee),1);
  }
  
}