import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],

})

export class OtherComp{
@Input() otherItem;
@Output()delete = new EventEmitter();

onDelete(){
  this.delete.emit(this.otherItem);
}
}
