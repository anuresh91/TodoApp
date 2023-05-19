import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  lastId: number = 0;

  public todoItemList:TodoItem [] = [];

  constructor() { }

  // Adds a Todo Item to the Todo List
  addToTodoList(todoItem: TodoItem) {
    if (!todoItem.id) {
      todoItem.id = ++this.lastId;
    }
    this.todoItemList.push(todoItem);
    return this;
  }

  // Deletes a Todo Item from the Todo List
  deleteFromTodoList(id: number) {
    this.todoItemList.forEach((value,index)=>{
      if(value.id == id)
        this.todoItemList.splice(index,1);
    });
    return this;
  }

  // Get all Todo Items from the Todo List
  getAllTodos(): TodoItem[] {
    return this.todoItemList;
  }
}
