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
var modal_service_1 = require('./modal.service');
var ModalComponent = (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.closeModal = function () {
        $('#myModal').modal('hide');
    };
    ModalComponent.prototype.ngOnInit = function () {
        var vm = this;
        //TODO remore jquery after getting solution for open event in angular or typescript
        $('#myModal').on('show.bs.modal', function (e) {
            vm.data = '';
            vm.getData();
        });
    };
    ModalComponent.prototype.getData = function () {
        var _this = this;
        this.modalService.getData().then(function (data) { return _this.data = data; });
    };
    ModalComponent.prototype.saveData = function () {
        this.closeModal();
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'modal-data',
            templateUrl: 'app/views/modal.html',
            providers: [modal_service_1.ModalService]
        }), 
        __metadata('design:paramtypes', [modal_service_1.ModalService])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map