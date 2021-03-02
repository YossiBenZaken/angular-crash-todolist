import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this._todoService.getTodos().subscribe(todos => this.todos = todos);
  }
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this._todoService.deleteTodo(todo).subscribe();
  }
  addTodo(todo:Todo) {
    this._todoService.addTodo(todo).subscribe(t=> this.todos.push(t));
  }
}
