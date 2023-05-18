import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from 'src/app/teacher/teacher.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TeacherService } from '../services/auth/teacher.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ButtonComponent } from '../button/button.component';
import { AuthTeacherService } from '../services/guards/auth-teacher.service';
@NgModule({
  declarations: [
    TeacherComponent,
    StudentDetailsComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    ButtonComponent
  ],
  providers:[TeacherService,AuthTeacherService]
})
export class TeacherModule { }
