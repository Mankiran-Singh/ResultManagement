import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  constructor(private router:Router){}
  navigateTeacher(){
     localStorage.setItem('token','r23yt8gfkdbfsudghfvuhbkmbjhuvuk')
     this.router.navigate(['teacher/studentDetails'])
  }
} 
