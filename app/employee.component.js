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
var modal_service_1 = require('./modal.service');
var modal_component_1 = require('./modal.component');
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, modalService) {
        this.employeeService = employeeService;
        this.modalService = modalService;
        this.title = 'New Employee';
        this.isSuccess = false;
        this.employees = [];
    }
    //delete employee handler here
    EmployeeComponent.prototype.deleteEmployee = function (employee) {
        if (window.confirm('Are you sure?')) {
            this.employeeService.deleteEmployee(employee);
            this.getEmployees();
            this.message = 'Employee has been deleted successfully';
            this.isSuccess = true;
        }
    };
    ;
    // get all employee on init
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    //
    EmployeeComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService
            .getEmployees()
            .then(function (employees) { return _this.employees = employees; });
    };
    ;
    // modal 
    EmployeeComponent.prototype.showModal = function (employee) {
        this.modalService.setData(employee.firstName);
    };
    // modal 
    EmployeeComponent.prototype.openModal = function () {
        this.modalService.setData('ok');
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee',
            providers: [employee_service_1.EmployeeService, modal_service_1.ModalService],
            directives: [router_1.ROUTER_DIRECTIVES, modal_component_1.ModalComponent],
            templateUrl: 'app/views/employee-form.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, modal_service_1.ModalService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map