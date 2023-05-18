import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { AlertService } from '../services/alerts/alert.service';
import { StudentResultComponent } from './student-result/student-result.component';
import { ButtonComponent } from '../button/button.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentResultComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    ButtonComponent
  ],
  providers:[AlertService]
})
export class StudentModule { }
