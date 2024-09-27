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

  /**
   * get the first of the specified user
   * @param user_id the user to get the friends for
   * @returns Observable
   */
  getFriends(user_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/friend?userId=${user_id}`)
  }

  /**
   * 
   * @param user_id 
   * @returns 
   */
  getRequests(user_id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/friend-request?userId=${user_id}`)
  }

  acceptRequst(request_id: string):Observable<any> {
    return this.http.put(`${this.baseUrl}/friend-requests/${request_id}/accept`, request_id)
  }

  declineRequest(request_id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${request_id}/decline`, request_id)
  }

  isPending(request_id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${request_id}/pending`, request_id)
  }
}
