import {Component} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector:'dashboard',
	templateUrl:'app/views/dashboard.html',
	directives: [ROUTER_DIRECTIVES]	
})
export class DashboardComponent {
	constructor(private router: Router){}
	logout(){
		this.router.navigate(['/login']);
	}
}