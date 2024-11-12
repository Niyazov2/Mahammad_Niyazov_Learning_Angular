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
 title = "Events";
}
