import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getAllTasks() {
  const path = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
  return this.http.get<Task[]>(path);
}

getTask(id: string) {
  const path = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/'+id+'.json';
  return this.http.get<Task>(path);
} 
}
