import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Employee } from './employee';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';


@Component({
	selector:'employee',
	providers:[EmployeeService,ModalService],
	directives: [ROUTER_DIRECTIVES,ModalComponent],
	templateUrl:'app/views/employee-form.html'
})

export class EmployeeComponent implements OnInit{
	
	title= 'New Employee';
	isSuccess:Boolean=false;
	message:string;
	private employees:Employee[]=[];
	private isModal:boolean:false;
	constructor(
	private employeeService: EmployeeService,
	private modalService: ModalService
	) { }
	//delete employee handler here
	deleteEmployee(employee:Employee){
		if(window.confirm('Are you sure?')){
		this.employeeService.deleteEmployee(employee);
		this.getEmployees();
		this.message='Employee has been deleted successfully';
		this.isSuccess = true;
		}
	};
	// get all employee on init
	ngOnInit(){
		this.getEmployees();
	}
	//
	getEmployees(){
		this.employeeService
		.getEmployees()
		.then(employees => this.employees = employees);
	};

	// modal 
	showModal(employee){
		this.modalService.setData(employee.firstName);		
	}
	// modal 
	openModal(){
		this.modalService.setData('ok');		
	}
}