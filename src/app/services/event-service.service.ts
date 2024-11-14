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

  getEventsById(id: number): Observable<Event | undefined>{
    const event = this.list.find((event) => event.id === id);
    return of(event);
  }

   addEvent(newEvent: Event): Observable<Event[]> {
    this.list.push(newEvent);
    return of(this.list);
   }

   updateEvent(updateEvent: Event): Observable<Event[]>{
    const index = this.list.findIndex((list) => list.id === updateEvent.id);
    if(index !== -1){
      this.list[index] = updateEvent;
    }
    return of(this.list)
   }

   deleteEvent(id: number): Observable<Event[]>{
    this.list = this.list.filter((list) => list.id !== id);
    return of(this.list); 
   }
}
