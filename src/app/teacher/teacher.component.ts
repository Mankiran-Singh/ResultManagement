import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../services/auth/teacher.service';
import { Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import { EventService } from '../services/events/event.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  teacherForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    rollNo:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    score:new FormControl('',[Validators.required])
  })
  showErrors:boolean=false;

  editMode:boolean=false;
  id:number=0;
  constructor(private teacherService:TeacherService,private router:Router,private route: ActivatedRoute){}
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      const data = params;
      console.log(data)
      this.id=data['id'] // Access the passed data
      this.editMode=data['editMode']
      this.teacherForm.setValue({
        rollNo:data['rollNo'],
        name:data['name'],
        dob:data['dob'],
        score:data['score']
      })
    });
  }

  get name(){
    return this.teacherForm.get('name');
  }
  get rollNo(){
    return this.teacherForm.get('rollNo');
  }
  get dob(){
    return this.teacherForm.get('dob');
  }
  get score(){
    return this.teacherForm.get('score')
  }

  token="r23yt8gfkdbfsudghfvuhbkmbjhuvuk";
  teacherDetails(){
    if(this.editMode==undefined || this.editMode==false){
      if(this.teacherForm.valid){
        this.teacherService.postTeachersData(this.teacherForm.value).subscribe(()=>{
            localStorage.setItem("token",this.token);
            this.router.navigate(['teacher/studentDetails']);
        })
     }else{
      this.showErrors=true;
     }
    }else{
      this.updateProduct(this.id,this.teacherForm.value)
    }
  }

  clear(){
    this.teacherForm.setValue({
      rollNo:'',
      name:'',
      dob:'',
      score:''
    })
  }

  updateProduct(id:number,data:any){
    this.teacherService.putTeachersData(id,data).subscribe(()=>{
       this.router.navigate(['teacher/studentDetails'])
    })
    this.teacherForm.setValue({
      rollNo:'',
      name:'',
      dob:'',
      score:''
    })
    this.editMode=false
  }
}
