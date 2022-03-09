import { Component } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public completedTasks: string[] = [];

  constructor(private taskService:TaskServiceService) {
    this.completedTasks = taskService.getCompletedTasks();
  }

  public removeCompletedTask(pos:number){
    this.taskService.removeCompletedTask(pos);
    this.completedTasks = this.taskService.getCompletedTasks();
  }

  public unCompleteTask(pos:number){
    this.taskService.unCompleteTask(pos);
    this.completedTasks = this.taskService.getCompletedTasks();
  }

  public removeAllCompletedTasks(){
    this.taskService.removeAllCompletedTasks();
    this.completedTasks = this.taskService.getCompletedTasks();
  }

}
