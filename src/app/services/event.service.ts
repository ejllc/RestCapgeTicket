import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  private eventUrl = 'http://localhost:7777/api/v1/events';

  public getEvents() {
    return this.http.get<Event[]>(this.eventUrl)
  }

  public deleteEvent(event: Event) {
    return this.http.delete(this.eventUrl + "/" + event.id);
  }

  public createEvent(event: Event) {
    return this.http.post<Event>(this.eventUrl, event);
  }

  public updateUser(id: any, data: Event): Observable<any> {
    return this.http.put(`${this.eventUrl}/${id}`, data);
  }
}
