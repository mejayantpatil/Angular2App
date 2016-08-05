import { provideRouter, RouterConfig }  from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { NewEmployeeComponent } from './newEmployee.component';
import { EmployeeDetailComponent } from './employee.detail.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';

const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'dashboard',
		component:DashboardComponent,
		children:[{
			path:'',
			redirectTo:'employees',
			pathMatch:'full'
		},
		{
			path: 'employees',
			component: EmployeesComponent
		},
		{
			path: 'employee/:id',
			component: EmployeeDetailComponent
		},
		{
			path:'newEmployee',
			component: NewEmployeeComponent
		},
		{
			path:'employee/edit/:id',
			component:NewEmployeeComponent
		}]
	}
];

export const appRouterProviders = [
  provideRouter(routes)
];
