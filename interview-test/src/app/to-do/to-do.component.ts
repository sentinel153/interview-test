import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'], 
  template: `
    <h2>Todos</h2>
    <input #field />
    <button (click)="add(field.value)">Add</button>

    @for (todo of todos; track $index) {
    <p>
      <input type="checkbox" (change)="toggle($index)" />
      @if (todo.done) {
      <s>{{{{ todo.text}}}}</s>
      } @else {
      <span>{{{{ todo.text }}}}</span>
      }
    </p>
    } @empty {
    <p>No todos</p>
    }
  `,
})
export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todos: Array<{done: boolean; text: string}> = [];

  add(text: string) {
    this.todos.push({text, done: false});
  }

  toggle(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }

}

