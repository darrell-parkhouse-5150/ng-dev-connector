import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusUpdate } from '../models/status-update';
@Injectable({
    providedIn: 'root',
})
export class StatusUpdateService {
    constructor(private http: HttpClient) {}
    private apiUrl = 'http://localhost:3000/user';
    createUpdate(text: string): Observable<StatusUpdate> {
        return this.http.post<StatusUpdate>(`${this.apiUrl}/status-update`, {
            text,
        });
    }

    getAllStatusUpdate(userId: string = '') {
        return this.http.get(`${this.apiUrl}/${userId}/status-update`);
    }

    removeStatusUpdate(statusUpdateId: number) {
        return this.http.delete(
            `${this.apiUrl}/user/status-updates/${statusUpdateId}`
        );
    }

    updateStatusUpdate(statusUpdateId: number) {
        return this.http.put(
            `${this.apiUrl}/user/status-updates/${statusUpdateId}`,
            { statusUpdateId }
        );
    }
}
