import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  task: Task = {
    name: '',
    done: false
  };
  title: string = 'Todo list';
  tasks: Observable<Task[]>;

  constructor(private service: TodoListService) { }

  ngOnInit() {
    this.tasks = this.service.fetchTasks();
  }

  addTask() {
    this.tasks.subscribe(data => {
      console.log(data);
    });
    // this.tasks.push({
    //   name: this.task.name,
    //   done: this.task.done
    // });

    // this.task = {
    //   name: null,
    //   done: false
    // }
  }

  changeStatus(task: Task) {
  }
}

export interface Task {
  name: string;
  done: boolean;
}
