import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   private apiUrl = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) {}

  addComment(postId: number, text: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${postId}/comments`, { text })
  }

  getPostMeta(postId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${postId}/meta`, {})
  }

  
}
