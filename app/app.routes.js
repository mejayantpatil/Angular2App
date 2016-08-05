"use strict";
var router_1 = require('@angular/router');
var employees_component_1 = require('./employees.component');
var newEmployee_component_1 = require('./newEmployee.component');
var employee_detail_component_1 = require('./employee.detail.component');
var dashboard_component_1 = require('./dashboard.component');
var login_component_1 = require('./login.component');
var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        children: [{
                path: '',
                redirectTo: 'employees',
                pathMatch: 'full'
            },
            {
                path: 'employees',
                component: employees_component_1.EmployeesComponent
            },
            {
                path: 'employee/:id',
                component: employee_detail_component_1.EmployeeDetailComponent
            },
            {
                path: 'newEmployee',
                component: newEmployee_component_1.NewEmployeeComponent
            },
            {
                path: 'employee/edit/:id',
                component: newEmployee_component_1.NewEmployeeComponent
            }]
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map