import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasks: string[] = [];
  private completedTasks: string[] = [];
  private importantTasks: string[] = [];

  constructor() {
    this.tasks.push("Tarea 1", "Tarea 2");
    this.completedTasks.push("Tarea 3", "Tarea 4");
    this.importantTasks.push("Tarea 5", "Tarea 6")
   }

   public addTask(task:string){
     this.tasks.push(task);
   }

   public removeTask(pos: number){
     this.tasks.splice(pos,1);
   }

   public getTasks(){
     return this.tasks;
   }

   public completeTask(pos: number){
     this.completedTasks.push(this.tasks[pos]);
     this.removeTask(pos);
   }

   public getCompletedTasks(){
     return this.completedTasks;
   }

   public removeCompletedTask(pos:number){
    this.completedTasks.splice(pos,1);
   }

   public removeAllCompletedTasks(){
     this.completedTasks.splice(0, this.completedTasks.length)
   }

   public unCompleteTask(pos:number){
     this.tasks.push(this.completedTasks[pos]);
     this.removeCompletedTask(pos);
   }

   public getImportantTask(){
     return this.importantTasks;
   }

   public addImportantTask(it:string){
     this.importantTasks.push(it);
   }

   public removeImportantTask(pos:number){
     this.importantTasks.splice(pos,1);
   }

   public sendToImportantTasks(pos:number){
     this.addImportantTask(this.tasks[pos]);
     this.removeTask(pos);
   }

   public sendToNormalTasks(pos:number){
     this.tasks.push(this.importantTasks[pos]);
     this.removeImportantTask(pos);
   }

   public completeImportantTask(pos:number){
     this.completedTasks.push(this.importantTasks[pos]);
     this.removeImportantTask(pos);
   }
}
