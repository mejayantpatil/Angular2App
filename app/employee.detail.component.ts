import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee} from './employee';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	  selector: 'employee-details',
	  providers:[EmployeeService],
	  templateUrl:'app/views/employee-details.html',
	  directives: [ROUTER_DIRECTIVES]
})
export class EmployeeDetailComponent implements OnInit {
	employee:Employee ={id:null,firstName:null,lastName:null,emailId:null};

	constructor(
	private employeeService:EmployeeService,
	private route: ActivatedRoute){}
	title='Employee Information';
	
	ngOnInit(){
		this.route.params.subscribe(params => {
		let id = +params['id'];
		this.employeeService.getEmployee(id).then(employee => {
			this.employee = employee;
			});
		});
			
	}	
}