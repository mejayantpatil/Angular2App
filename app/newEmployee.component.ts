import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Employee } from './employee';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector:'new-employee-form',
	providers:[EmployeeService],
	directives: [ROUTER_DIRECTIVES],
	templateUrl:'app/views/new-employee-form.html'
})

export class NewEmployeeComponent implements OnInit{
	title= 'New Employee';
	isError:Boolean=false;
	isSuccess:Boolean=false;
	message:string;
	private employees:Employee[]=[];
	private data:Employee = {id:null,firstName:null,lastName:null,emailId:null};
	private selectedEmployee: Employee={id:null,firstName:null,lastName:null,emailId:null};
	private isSelected:Boolean=false;
	
	constructor(
	private employeeService: EmployeeService,
	private route: ActivatedRoute) { }
	
	newEmployee() {
		this.employeeService.setEmployee(this.data);
		this.data = {id:null,firstName:null,lastName:null,emailId:null};
		this.isSuccess = true;
		this.message = 'Employee added successfully.';
		};
	updateEmployee() {
		this.employeeService.updateEmployee(this.selectedEmployee, this.data);
		this.data = {id:null,firstName:null,lastName:null,emailId:null};
		this.isSelected = false;
		this.selectedEmployee = {id:null,firstName:null,lastName:null,emailId:null};
		this.title= 'New Employee';
		this.isSuccess = true;
		this.message = 'Employee updated successfully.';
	};

	ngOnInit(){
		this.route.params.subscribe(params=>{
			if(params['id']){
				this.title = 'Update Employee';
				this.isSelected = true;
				let id = +params['id'];
				this.employeeService.getEmployee(id).then(employee => {
				this.data = employee;
				this.selectedEmployee = employee;	
			});
			}
		});
	}
	
}