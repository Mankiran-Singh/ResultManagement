import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthTeacherService {

  constructor(private router:Router) { }
  canActivate(): boolean  {
    
     //const token1=localStorage.getItem('token');
    const token2=localStorage.getItem('token');
    if( token2)
    {
      this.router.navigate(['teacher/studentDetails']);
      return false;
    }
    else
    {
      return true;
    }
  }
}
