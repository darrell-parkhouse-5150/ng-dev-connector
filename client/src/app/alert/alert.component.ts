import { Component, Input } from '@angular/core';
import { Alert } from '../models/alert';
import { AlertType } from '../models/AlertTypes';
import { Store } from '@ngrx/store';
import { select, selectSnapshot } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';

@Component({
    selector: 'ng-alert',
    standalone: true,
    imports: [
        StoreModule.forRoot({ alert: AlertReducer})
    ],
    templateUrl: './alert.component.html',
    styleUrl: './alert.component.scss'
})
export class AlertComponent {
    @Input() alerts$: Observable<Alert[]>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.alerts$ = this.store.select('alert');
    }

    // TODO: finish this function
    dismissAlert(alert: Alert) {
        this.store.dispatch()
    }
}
