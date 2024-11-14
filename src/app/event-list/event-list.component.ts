import { Component } from '@angular/core';
import { eventList } from '../data/event-items';
import { NgFor, NgClass } from '@angular/common';
import { EventListItemComponent } from "../event-list-item/event-list-item.component";

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgFor, EventListItemComponent, NgClass],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
eventList = eventList;
}
