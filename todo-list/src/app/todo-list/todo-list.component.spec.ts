import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent, Task } from './todo-list.component';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have "Todo list" as title', () => {
    expect(component.title).toBe('Todo list');
  });

  it('should have an empty list of task', () => {
    expect(component.tasks.length).toBe(0);
  });

  it('should add one task to the list', () => {
    const task1: Task = {
      name: 'my task',
      done: false
    };

    component.task = task1;
    component.addTask();
    
    expect(component.tasks.length).toBe(1);
  });

  it('should clear task after it has been inserted', () => {
    const task1: Task = {
      name: 'my task',
      done: false
    };

    component.task = task1;
    component.addTask();

    expect(component.tasks.length).toBe(1);
    expect(component.task.name).toBeNull();
    expect(component.task.done).toBeFalsy();
  });
});
