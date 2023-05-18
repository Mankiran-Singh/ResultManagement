import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alerts/alert.service';
import { TeacherService } from '../services/auth/teacher.service';
import { Route, Router,NavigationExtras } from '@angular/router';
import { EventService } from '../services/events/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  studentForm:any
  showErrors:boolean=false;
  constructor(private alertService:AlertService,private teacherService:TeacherService,private router:Router,private eventService:EventService){
     this.teacherService.getStudentsData().subscribe((res)=>{
       
     })
  }
  
  ngOnInit(){
    this.studentForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      rollNo:new FormControl('',[Validators.required])
    })
  }

  get name(){
    return this.studentForm.get('name');
  }
  get rollNo(){
    return this.studentForm.get('rollNo');
  }

  error=false;
  studentDetails(){
     if(this.studentForm.valid){
      this.teacherService.getStudentsData().subscribe((res:any)=>{
          for(let i=0;i<res.length;i++){
             if(res[i].rollNo===this.studentForm.value.rollNo && res[i].name===this.studentForm.value.name){
                  this.alertService.nameValid()
                 this.router.navigate(['student/showResult'],{queryParams:res[i]})
             }
             else{
               this.error=true
             }
          }
      })
      if(this.error){
        this.alertService.nameInvalid()
      }
     }
     else{
       this.showErrors=true;
     }
  }

  clear(){
    this.studentForm.setValue({
      rollNo:'',
      name:'',
    })
  }
}
