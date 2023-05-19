import { TestBed, inject } from '@angular/core/testing';
import { TodoItem } from '../models/todo-item.model';

import { TodoItemService } from './todo-item.service';

describe('TodoItemService', () => {
  let service: TodoItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
