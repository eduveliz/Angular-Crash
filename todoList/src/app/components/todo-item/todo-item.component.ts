import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Todo} from "../../modules/Todo";
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };
    return classes;
  };

  onToggle(todo) {
    todo.completed = !todo.completed;

    this.todoService.toogleCompleted(todo).subscribe(todo => console.log(todo))
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
    console.log("delete");
  }
}
