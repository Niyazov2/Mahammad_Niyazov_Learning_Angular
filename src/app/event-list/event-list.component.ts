import { Component } from '@angular/core';
import { Event } from '../interface/event';
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
 
  eventList: Event[] = [
      {
      id: 1,
      nameOfEvent: "Windsor-Essex Tech Conference",
      hostName: "Niyazov",
      email: "niyazov@gmail.com",
      imageUrl:"",
      isAdmin: true
      },
      {
        id: 2,
        nameOfEvent: "Angular Conference 2024",
        hostName: "Jane Doe",
        email: "doe@gmail.com",
        imageUrl:"",
        isAdmin: false
      },
      {
        id: 3,
        nameOfEvent: "Artifical Intelligence Workshop",
        hostName: "Usman",
        email: "usman213@gmail.com",
        imageUrl:"",
        isAdmin:true
      },
      {
        id: 4,
        nameOfEvent: "Blockchain Expo",
        hostName: "Michael",
        email: "michael@example.com",
        imageUrl: "",
        isAdmin: false
    },
    {
        id: 5,
        nameOfEvent: "Marketing",
        hostName: "Ahmed ",
        email: "ahmed@example.com",
        imageUrl: "",
        isAdmin: true
    },
    {
        id: 6,
        nameOfEvent: "Data Science Meetup",
        hostName: "Ashley",
        email: "ashley@example.com",
        imageUrl: "",
        isAdmin: true
    }
  ]
}
