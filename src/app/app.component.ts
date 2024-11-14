import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EventListComponent } from "./event-list/event-list.component";
import { EventListItemComponent } from "./event-list-item/event-list-item.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, EventListComponent, EventListItemComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
 title = "Events";
}
