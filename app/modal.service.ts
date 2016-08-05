import { Injectable } from '@angular/core';
import { Data,MyData} from './data';

@Injectable()
export class ModalService{
	private data:MyData=Data;
	setData(data){
		this.data.name = data; 
		$('#myModal').modal('show');
	}
	
	getData(){
		return Promise.resolve(this.data.name);
	}
}