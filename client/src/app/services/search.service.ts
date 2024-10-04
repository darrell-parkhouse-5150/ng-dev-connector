import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '../models/component';
import { ComponentTypes } from '../models/ComponentTypes';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:'
  constructor(private http: HttpClient) { }

  searchByName(name: string): Observable<Component> {
    return this.http.get<Component>(`${this.apiUrl}`)
  }
}
