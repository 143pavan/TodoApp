import { Component } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor (private t:TodoserviceService){}
  tasks:string[]=[]
  ngOnInit(){
    this.tasks=this.t.getTodoArray()
  }
  delete(i:number){
    this.t.removeTodo(i);
  }
}
