import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'], 
  template: `
    <h2>To dos</h2>
    <input #field />
    <button (click)="add(field.value)">Add</button>

      <div *ngFor="let todo of todos; let i = index" >
      <p> 
        <input type="checkbox" (change)="toggle(i)"  [attr.data-index]="i">
        <ng-element *ngIf="!todo.done">{{todo.text}}</ng-element>
        <ng-element *ngIf="todo.done"><s>{{todo.text}}</s></ng-element>
      </p> 
      </div>
  `,
})
export class AppComponent {
  title = 'interview-test';
  todos: Array<{done: boolean; text: string}> = [];

  add(text: string) {
    this.todos.push({text, done: false});
  }

  toggle(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }

}
