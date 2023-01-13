import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-button-delete-all',
  templateUrl: './todo-button-delete-all.component.html',
  styleUrls: ['./todo-button-delete-all.component.scss']
})
export class TodoButtonDeleteAllComponent {

  @Output() public emmitItemTaskList = new EventEmitter();
  
  public addItemTaskList: string = "";
  constructor() {}

  ngOnInit(): void{
  }

  public submitItemTask(){
    console.log(this.addItemTaskList);
  }
}
