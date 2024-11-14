import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../interface/event';
import { eventList } from '../data/event-items';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private list: Event[] = eventList;

  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(eventList);
  }
}
