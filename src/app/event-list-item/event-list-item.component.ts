import { DatePipe, LowerCasePipe, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Event } from '../interface/event';
import { CurrencyWithSymbolPipe } from '../pipes/currency-with-symbol.pipe';

@Component({
  selector: 'app-event-list-item',
  standalone: true,
  imports: [NgIf,NgOptimizedImage,DatePipe, UpperCasePipe, LowerCasePipe, CurrencyWithSymbolPipe],
  templateUrl: './event-list-item.component.html',
  styleUrl: './event-list-item.component.css'
})
export class EventListItemComponent {
  @Input() event?: Event;
  @Input() inStock?: Event; 
  today: Date = new Date();
}
