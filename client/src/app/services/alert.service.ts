import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class AlertService {
    private alertSubject = new Subject<any>();
    alertObservable = this.alertSubject.asObservable();

    success(msg: string): void {
        this.alertSubject.next({ type: 'success', msg });
    }

    error(msg: string): void {
        this.alertSubject.next({ type: 'error', msg });
    }

    warning(msg: string): void {
        this.alertSubject.next({ type: 'warning', msg });
    }

    info(msg: string): void {
        this.alertSubject.next({ type: 'info', msg });
    }

    clear(): void {
        this.alertSubject.next(null);
    }
}
