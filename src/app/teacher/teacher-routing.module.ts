import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AuthTeacherService } from '../services/guards/auth-teacher.service';

const routes: Routes = [
  {path:'',redirectTo:'teacher',pathMatch:'full'},
  {path:'',component:TeacherComponent,canActivate:[AuthTeacherService]},
  {path:'studentDetails',component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
