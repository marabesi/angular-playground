import { Injectable } from '@angular/core';
import { Task } from './todo-list.component';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoListService {

    static URL: string = 'http://demo7102972.mockable.io/tasks';

    constructor(private http: Http) {}

    createTask(task: Task): Observable<Response> {
        return this.http.post(TodoListService.URL, task);
    }

    fetchTasks(): Observable<Task[]> {
        return this.http.get(TodoListService.URL).map(response => {
            return response.json().map(item => {
                const task: Task = {
                    name: item.name,
                    done: item.done
                };

                return task;
            });
        });
    }
}