import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  constructor(private _http: HttpClient) {}

  // Get Todos
  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(`${this.todoUrl}${this.todosLimit}`);
  }

  // Delete Todo
  deleteTodo(todo:Todo): Observable<Todo> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this._http.delete<Todo>(url,httpOptions);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<Todo> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this._http.put<Todo>(url, todo, httpOptions);
  }

  // Add Todo
  addTodo(todo: Todo): Observable<Todo> {
    return this._http.post<Todo>(this.todoUrl,todo,httpOptions);
  }
}
