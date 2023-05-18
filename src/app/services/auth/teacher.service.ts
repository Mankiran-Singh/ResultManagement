import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }
  urlTeacher='http://localhost:3000/teacher';
  urlResult='http://localhost:3000/result';

  postTeachersData(data:any){
    return this.http.post(this.urlTeacher,data)
  }

  getStudentsData(){
    return this.http.get(this.urlTeacher)
  }

  postResult(data:any){
     return this.http.post(this.urlResult,data)
  }

  getResult(){
    return this.http.get(this.urlResult)
  }

  putTeachersData(id:any,data:any){
    return this.http.put(`http://localhost:3000/teacher/${id}`,data)
  }

  delete(id:number){
    return this.http.delete(`http://localhost:3000/teacher/${id}`)
  }
}
