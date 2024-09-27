import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { CommonModule, NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'ng-alert',
    standalone: true,
    imports: [CommonModule, NgClass, NgIf],
    templateUrl: './alert.component.html',
    styleUrl: './alert.component.scss'
})

export class AlertComponent implements OnInit, OnDestroy {
    msg: any;
    subscription: Subscription = new Subscription()

    constructor(private as: AlertService) {}

    ngOnInit(): void {
        this.subscription = this.as.alertObservable.subscribe(msg => {
            this.msg = msg;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}