import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

    // dataEmitter=new Subject<any>();
    // raiseDataEmitterEvent(data:any)
    // {
    //     this.dataEmitter.next(data)
    // }

    dataEmitter1=new EventEmitter<any>();
    raiseDataEmitterEvent1(data:any)
    {
        this.dataEmitter1.emit(data)
    }
}
