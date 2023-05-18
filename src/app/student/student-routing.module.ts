import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { AuthTeacherService } from '../services/guards/auth-teacher.service';

const routes: Routes = [
  {path:'',redirectTo:'student',pathMatch:'full'},
  {path:'',component:StudentComponent,canActivate:[AuthTeacherService]},
  {path:'showResult',component:StudentResultComponent,canActivate:[AuthTeacherService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
