import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifySubject = new Subject<any>()

  notify(message:string, type: 'friend-request' | 'follower') {
    this.notifySubject.next({message, type})
  }

   getNotifications() {
    return this.notifySubject.asObservable()
   }
}
