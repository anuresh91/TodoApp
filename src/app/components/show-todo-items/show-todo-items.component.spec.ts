import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTodoItemsComponent } from './show-todo-items.component';

describe('ShowTodoItemsComponent', () => {
  let component: ShowTodoItemsComponent;
  let fixture: ComponentFixture<ShowTodoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTodoItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
