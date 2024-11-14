import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { EventListComponent } from "./event-list/event-list.component";
import { EventListItemComponent } from "./event-list-item/event-list-item.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, EventListComponent, EventListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
 title = "Events";
}
