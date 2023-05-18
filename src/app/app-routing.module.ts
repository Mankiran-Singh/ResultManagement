import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageComponent } from './no-page/no-page.component';
import { HomeComponent } from './home/home.component';
import { AuthTeacherService } from './services/guards/auth-teacher.service';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthTeacherService]},

  {path:'teacher',
  loadChildren: () => import('src/app/teacher/teacher.module').then(m => m.TeacherModule)},

  {path:'student',
  loadChildren: () => import('src/app/student/student.module').then(m => m.StudentModule)},

  {path:'**',component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
