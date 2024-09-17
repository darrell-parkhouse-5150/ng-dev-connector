import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = 'http://localhost/api'; // Update this with your API URL

  constructor(private http: HttpClient) { }
/**
 * Retrieves a profile by the specified ID from the server.
 * @param id - The ID of the profile to retrieve.
 * @returns An observable of type 'Profile' representing the retrieved profile.
 */
  getProfileById(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.url}/${id}`);
  }

  /**
 * Retrieves profiles from the server.
 * @returns An observable of type 'Profile[]' representing the retrieved profiles.
 */
  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url)
  }
/**
 * Updates a profile on the server.
 * @param profile - The profile object to be updated.
 * @returns An observable of type 'Profile' representing the updated profile.
 */
  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.url}/${profile.id}`, profile);
  }

  /**
 * Creates a new profile on the server.
 * @param profile - The profile object to be created.
 * @returns An observable of type 'Profile' representing the created profile.
 */
  createProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.url, profile);
  }
/**
 * Deletes a profile from the server by the specified ID.
 * @param id - The ID of the profile to delete.
 * @returns An observable of type 'void' indicating the success of the deletion operation.
 */

  deleteProfile(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
