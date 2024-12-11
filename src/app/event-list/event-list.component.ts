import { Component } from '@angular/core';
import { Event } from '../interface/event';
import { NgFor, NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { EventListItemComponent } from "../event-list-item/event-list-item.component";
import { EventServiceService } from '../services/event-service.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, EventListItemComponent, MatButtonModule, MatInputModule, MatCheckboxModule, MatCardModule, MatIconModule, MatToolbarModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

selectedEvent?: Event;

 eventList: Event[] = [];

constructor(private EventServiceService: EventServiceService, private Router: Router) {}

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

updateEvent(item: Event){
  this.selectedEvent = item;
  this.Router.navigate(['events', item.id]);
}

deleteEvent(id: number){
  this.EventServiceService.deleteEvent(id);
  this.eventList = this.eventList.filter((item) => item.id ! == id);
}
}0



