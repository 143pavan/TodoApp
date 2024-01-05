import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private tasks:string[]=[];
  addTodo(todo :string):void{
    this.tasks.push(todo)
  }
  removeTodo(id :number):void{
    this.tasks.splice(id,1)
  }
  getTodoArray(){
    return this.tasks
  }
  constructor() { }
}
