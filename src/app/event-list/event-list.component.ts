import { Component } from '@angular/core';
import { Event } from '../interface/event';
import { NgFor, NgClass } from '@angular/common';
import { EventListItemComponent } from "../event-list-item/event-list-item.component";
import { EventServiceService } from '../services/event-service.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgFor, EventListItemComponent, NgClass],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
 eventList: Event[] = [];

constructor(private EventServiceService: EventServiceService) {}

ngOnInit(): void{
  this.EventServiceService.getEvents().subscribe((data) =>{
    this.eventList = data;
  });
}
}
