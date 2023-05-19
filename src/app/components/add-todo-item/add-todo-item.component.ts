import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TodoItemService } from 'src/app/services/todo-item.service';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss']
})
export class AddTodoItemComponent implements OnInit {

  addTodoItemForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoItemService: TodoItemService,
    public datepipe: DatePipe
    ) { }

  ngOnInit(): void {

    //Create a addTodoItemForm form
    this.addTodoItemForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      dueDate: ['', [Validators.required]]
    });
  }

  addTodoItem() {
    let description: string = this.addTodoItemForm.controls['description'].value;
    let dueDate: Date = this.addTodoItemForm.controls['dueDate'].value;
    let todoItem = new TodoItem(0, description, this.datepipe.transform(dueDate, 'MM/dd/yyyy') ,false);
    // Add TodoItem to TodoList
    this.todoItemService.addToTodoList(todoItem);
  }

  clearAllInputs(){
    this.addTodoItemForm.reset();
    Object.keys(this.addTodoItemForm.controls).forEach(key => {
      this.addTodoItemForm.get(key).setErrors(null);
    });
  }

}
