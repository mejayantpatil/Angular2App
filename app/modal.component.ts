import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
	selector:'modal-data',
	templateUrl:'app/views/modal.html',
	providers:[ModalService]
})

export class ModalComponent implements OnInit {
	constructor(private modalService: ModalService){}
	data:string;
	closeModal(){
		$('#myModal').modal('hide');
	}
	ngOnInit(){
		var vm = this;
		//TODO remore jquery after getting solution for open event in angular or typescript
		$('#myModal').on('show.bs.modal', function (e) {
			vm.data = '';
			vm.getData();			
		})
	}
	
	getData(){
		this.modalService.getData().then(data=>this.data = data);		
	}
	saveData(){
		this.closeModal();
	}
}