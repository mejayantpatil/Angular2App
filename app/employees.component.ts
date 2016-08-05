import { Component } from '@angular/core';
import { DataComponent } from './data.component';
import { EmployeeComponent } from './employee.component';

@Component({
  selector: 'my-employees',
  directives:[EmployeeComponent],
  template: `<employee></employee>`
})
export class EmployeesComponent {
	title='New Employee Registration';
}