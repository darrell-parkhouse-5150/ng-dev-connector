// @ts-ignore
import { Component, Inject, Input } from '@angular/core';
import { Alert } from '../models/alert';
import { AlertType } from '../models/AlertTypes';
// @ts-ignore
import { Store } from '@ngrx/store';
// @ts-ignore
import { select, selectSnapshot } from '@ngrx/store';
import { Observable } from 'rxjs';
// @ts-ignore
import { StoreModule } from '@ngrx/store';
import { CommonModule, NgFor } from '@angular/common';

@Component({
    selector: 'ng-alert',
    standalone: true,
    imports: [/*StoreModule.forRoot({ alert: AlertReducer})*/ CommonModule, NgFor],
    templateUrl: './alert.component.html',
    styleUrl: './alert.component.scss'
})
export class AlertComponent {
    
    @Input()
    alerts$!: Observable<Alert[]>;
    
    alert: Alert = {
        type: AlertType.success,
        msg: '',
    }

    // @ts-ignore
    constructor(@Inject('store') private store: Store) {}

    ngOnInit(): void {
        this.alerts$ = this.store.select('alert');
        this.store = null
    }

    // TODO: finish this function
    dismissAlert(alert: Alert) {
        this.store.dispatch()
    }
}
