import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  conversion:any;
  respuesta:[];

  constructor(private taskService: TaskService)
  {}
  
  filterPost ='';

  getAllTasks() {
  this.taskService.getAllTasks()
  .subscribe(taks => {
    console.log(taks);
  });
}

getTask() {
  this.taskService.getTask('3')
  .subscribe(taks => {
    console.log(taks);
  });
}

  ngOnInit() {
    this.taskService.getAllTasks()
    .subscribe(taks =>{
    this.conversion = taks;
    this.respuesta = this.conversion;

    console.log('Probando datos',this.respuesta);
    });
  }

}


