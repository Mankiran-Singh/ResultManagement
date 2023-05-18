import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/auth/teacher.service';
import { EventService } from 'src/app/services/events/event.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.scss']
})
export class StudentResultComponent implements OnInit{
  constructor(private eventService:EventService,private teacherService:TeacherService,private route:ActivatedRoute){}

  result:any={}

  array:any=[]
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      const data=params
         console.log(data) // Access the passed variables
         this.result=data
    });
  }

}
