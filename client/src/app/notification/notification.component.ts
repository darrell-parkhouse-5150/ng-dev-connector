import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Notification } from '../models/notification';
import { Subscription } from 'rxjs';
import { NotificationService } from '../services/notification.service';
@Component({
    selector: 'ng-notification',
    standalone: true,
    imports: [NgIf],
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnDestroy, OnInit {
    notification: Notification = {
        type: '',
        message: '',
    };
    subsription!: Subscription;
    constructor(private ns: NotificationService) {}

    ngOnInit(): void {
        this.subsription = this.ns
            .getNotifications()
            .subscribe((notification) => {
                this.notification = notification;

                setTimeout(() => {
                    notification = null;
                }, 3000);
            });
    }
    ngOnDestroy(): void {
        this.subsription.unsubscribe();
    }
}
