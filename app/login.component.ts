import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector:'login-form',
	templateUrl:'app/views/login.html'
})

export class LoginComponent{
	private emailid:string;
	private password:string;
	//private user:{emailid, password};
	constructor(private router:Router){}
	login(){
		console.log(this);
		this.router.navigate(['/dashboard']);
	}
}