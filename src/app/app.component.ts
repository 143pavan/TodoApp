import { Component } from '@angular/core';
import { TodoserviceService } from './todoservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private t:TodoserviceService){}
  title = 'todoapp';
  task:string=''
  tasks:string[]=[]
  addTask(){
    this.t.addTodo(this.task)
  }
  
}
