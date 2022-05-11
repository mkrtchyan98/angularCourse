import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemOnpushComponent } from './todo-item-onpush.component';

describe('TodoItemOnpushComponent', () => {
  let component: TodoItemOnpushComponent;
  let fixture: ComponentFixture<TodoItemOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
