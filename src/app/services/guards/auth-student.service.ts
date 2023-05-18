import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthStudentService {

  constructor(private router:Router) { }
  // canActivate(): boolean
  // {
  //   const token1=localStorage.getItem('token')
  //   const token2=localStorage.getItem('verificationId')
  //   if(token1 || token2){
  //     return true;
  //   }
  //   else{
  //     this.router.navigate(['auth/login'])
  //     return false;
  //   }
  //  }  
}
