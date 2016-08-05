"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employee_service_1 = require('./employee.service');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var NewEmployeeComponent = (function () {
    function NewEmployeeComponent(employeeService, route) {
        this.employeeService = employeeService;
        this.route = route;
        this.title = 'New Employee';
        this.isError = false;
        this.isSuccess = false;
        this.employees = [];
        this.data = { id: null, firstName: null, lastName: null, emailId: null };
        this.selectedEmployee = { id: null, firstName: null, lastName: null, emailId: null };
        this.isSelected = false;
    }
    NewEmployeeComponent.prototype.newEmployee = function () {
        this.employeeService.setEmployee(this.data);
        this.data = { id: null, firstName: null, lastName: null, emailId: null };
        this.isSuccess = true;
        this.message = 'Employee added successfully.';
    };
    ;
    NewEmployeeComponent.prototype.updateEmployee = function () {
        this.employeeService.updateEmployee(this.selectedEmployee, this.data);
        this.data = { id: null, firstName: null, lastName: null, emailId: null };
        this.isSelected = false;
        this.selectedEmployee = { id: null, firstName: null, lastName: null, emailId: null };
        this.title = 'New Employee';
        this.isSuccess = true;
        this.message = 'Employee updated successfully.';
    };
    ;
    NewEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.title = 'Update Employee';
                _this.isSelected = true;
                var id = +params['id'];
                _this.employeeService.getEmployee(id).then(function (employee) {
                    _this.data = employee;
                    _this.selectedEmployee = employee;
                });
            }
        });
    };
    NewEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'new-employee-form',
            providers: [employee_service_1.EmployeeService],
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/views/new-employee-form.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_2.ActivatedRoute])
    ], NewEmployeeComponent);
    return NewEmployeeComponent;
}());
exports.NewEmployeeComponent = NewEmployeeComponent;
//# sourceMappingURL=newEmployee.component.js.map