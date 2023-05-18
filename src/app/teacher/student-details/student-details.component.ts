import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { TeacherService } from 'src/app/services/auth/teacher.service';
import { EventService } from 'src/app/services/events/event.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit{
  constructor(private teacherService:TeacherService,private event:EventService,private router:Router){}

  studentsData:any=[]
   ngOnInit(){
     this.teacherService.getStudentsData().subscribe((res)=>{
         this.studentsData=res
     })
   }

   editData(j:any,editMode:boolean){
     localStorage.removeItem('token')
     this.router.navigate(['teacher'], { queryParams:{name:this.studentsData[j].name,
      rollNo:this.studentsData[j].rollNo,
      dob:this.studentsData[j].dob,
      score:this.studentsData[j].score,
      id:this.studentsData[j].id,
      editMode:editMode}})
   }

   addRecord(){
    localStorage.removeItem('token')
    this.router.navigate(['teacher'])
   }

   delete(id:number){
      this.teacherService.delete(id).subscribe(()=>{
        this.teacherService.getStudentsData().subscribe((res)=>{
          this.studentsData=res
        })
      })
   }
}
