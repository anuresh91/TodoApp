import { Component, OnInit } from '@angular/core';
import { TodoItemService } from 'src/app/services/todo-item.service';

@Component({
  selector: 'app-show-todo-items',
  templateUrl: './show-todo-items.component.html',
  styleUrls: ['./show-todo-items.component.scss']
})
export class ShowTodoItemsComponent implements OnInit {

  public todos:any;
  searchText = '';

  constructor(private todoItemService: TodoItemService) { }

  ngOnInit(): void {
    this.todos = this.todoItemService.getAllTodos();
  }

  removeTodoItem(id: number){
    this.todoItemService.deleteFromTodoList(id);
  }

}
