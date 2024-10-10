import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { StatusUpdate } from '../models/status-update';
import { NgFor } from '@angular/common';
@Component({
  selector: 'ng-status-update',
  standalone: true,
  imports: [NgFor],
  templateUrl: './status-update.component.html',
  styleUrl: './status-update.component.scss'
})
export class StatusUpdateComponent {
  statusText: string = ''
  userId!: number
  user: any
  statusUpdates: any = []
  status: string = ''

  constructor(private http: HttpClient) {}

  getUsers(user_id: number) {
    this.http.get(`/api/user/${user_id}`).subscribe(data => {
      this.user = data;
    })
  }

  getStatusUpdates(): void {
    this.http.get(`/api/user/status-updates`).subscribe(data => {
      this.statusUpdates = data
    })
  }

  postStatus(): void {
    this.http.post('/api/user/staus-updates/', this.status).subscribe(() => {
      this.statusText = ''
      this.getStatusUpdates()
    })
  }
}
