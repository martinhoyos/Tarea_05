import { Component } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public importantTasks: string[] = [];

  constructor(private taskService:TaskServiceService) {
    this.importantTasks = this.taskService.getImportantTask();
  }

  public removeImportantTask(pos:number){
    this.taskService.removeImportantTask(pos);
    this.importantTasks = this.taskService.getImportantTask();
  }

  public sendToNormalTask(pos:number){
    this.taskService.sendToNormalTasks(pos);
    this.importantTasks = this.taskService.getImportantTask();
  }

  public completeImportantTask(pos:number){
    this.taskService.completeImportantTask(pos);
    this.importantTasks = this.taskService.getImportantTask();
  }

}
