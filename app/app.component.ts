import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  templateUrl:'app/views/app.html',	
  directives: [ROUTER_DIRECTIVES]  
})
export class AppComponent {
  title='Globant';//ng-model
}