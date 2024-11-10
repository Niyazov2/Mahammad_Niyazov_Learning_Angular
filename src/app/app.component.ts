import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Event } from './interface/event';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  events: Event[] = [
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
