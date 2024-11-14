import { Component } from '@angular/core';
import { Event } from '../interface/event';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { EventListItemComponent } from "../event-list-item/event-list-item.component";
import { EventServiceService } from '../services/event-service.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgFor, EventListItemComponent, NgClass, NgIf],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

selectedEvent?: Event;

 eventList: Event[] = [];

constructor(private EventServiceService: EventServiceService) {}

ngOnInit(): void{
  this.EventServiceService.getEvents().subscribe((data) =>{
    this.eventList = data;
  });

  this.selectEvent(3);
}


selectEvent(id:number){
  this.EventServiceService.getEventsById(id).subscribe((selectedData) => {
    this.selectedEvent = selectedData;
  })
}
}
