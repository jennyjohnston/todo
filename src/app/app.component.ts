import { Component, Input } from '@angular/core';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ToDoComponent {
  title = 'TODO List';
  filterTasks: string;
  taskInput: string;
  taskItems: Todo[] = [
    { task: 'walk the dog', completed: false },
    { task: 'go to the store', completed: true },
    { task: 'get gas', completed: false },
    { task: 'wash the car', completed: false },
    { task: 'go to class', completed: true },
    { task: 'drink wine', completed: true },
    { task: 'go to bed on time', completed: false }
  ];

addTask = () => {
  const newTask = {
    task: this.taskInput,
    completed: false,
    };
      this.taskItems.push(newTask);
      this.taskInput = null;
      this.filterFunction();
  };  

trackByEntry = (index: number, todo: any) => {
  return index;
}

removeTask = (index) => {
  this.taskItems.splice(index,1);
  this.filterFunction()
};

completeTask = (index) => {
  this.taskItems[index].completed = !this.taskItems[index].completed;
};

filteredTasks = [...this.taskItems];

filterFunction = () => {
  console.log(this.filterTasks)
  this.filteredTasks = this.taskItems.filter(todo => 
    todo.task.toLowerCase().includes(this.filterTasks));
}
}