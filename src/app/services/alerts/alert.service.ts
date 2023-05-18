import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  nameInvalid(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Invalid Details',
      showConfirmButton: false,
      timer: 1500,
      width:'200px',
    })
  }

  nameValid(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'LOgged In',
      showConfirmButton: false,
      timer: 1500,
      width:'200px',
    })
  }
}
