import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (
      this.tasks = tasks));
  }

  deleteTask(task: any){
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t: any) => t.id !== task.id)))
  }

  toggleTask(task: any) {
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe();
  }

  addTask(data: any){
    this.taskService.addTask(data).subscribe((task) => (
      this.tasks.push(task)));
  }

}
