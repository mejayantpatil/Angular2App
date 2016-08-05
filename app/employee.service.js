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
var employees_1 = require('./employees');
var employee_1 = require('./employee');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.employees = employees_1.Employees;
    }
    EmployeeService.prototype.getEmployees = function () {
        var _this = this;
        //
        // This is implementation of promise over http service 
        return this.http.get('api/employees.json')
            .toPromise()
            .then(function (response) {
            _this.employees = response.json();
            return response.json(); //Promise.resolve(response.json() as Employee[]);
        })
            .catch(this.handleError);
        //for direct resolving promises here
        //return Promise.resolve(this.employees);
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.getEmployees()
            .then(function (employees) { return employees.find(function (employee) { return employee.id === id; }); });
    };
    EmployeeService.prototype.setEmployee = function (data) {
        this.employees.push(new employee_1.Employee(data.id, data.firstName, data.lastName, data.emailId));
        return this.employees;
    };
    EmployeeService.prototype.updateEmployee = function (selectedEmployee, employee) {
        var index = this.employees.indexOf(selectedEmployee);
        this.employees[index] = new employee_1.Employee(employee.id, employee.firstName, employee.lastName, employee.emailId);
    };
    EmployeeService.prototype.deleteEmployee = function (employee) {
        this.employees.splice(this.employees.indexOf(employee), 1);
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map