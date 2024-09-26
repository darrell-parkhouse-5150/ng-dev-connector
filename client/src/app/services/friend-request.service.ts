import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// TODO: download axios instead of using the HttpClient
@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {
  private baseUrl: string = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getFriends(user_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/friend?userId=${user_id}`)
  }

  getRequests(user_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/friend-request?userId=${user_id}`)
  }

  acceptRequst(request_id: string):Observable<any> {
    return this.http.put(`${this.baseUrl}/friend-requests/${request_id}/accept`, request_id)
  }
}
