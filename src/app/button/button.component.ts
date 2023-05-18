import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone:true
})
export class ButtonComponent {
  constructor(private router:Router){}
  onClick() {
    localStorage.removeItem('token')
    this.router.navigate(['home'])
  }
}
