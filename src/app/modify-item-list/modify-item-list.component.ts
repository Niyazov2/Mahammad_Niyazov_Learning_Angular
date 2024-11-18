import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventServiceService } from '../services/event-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-modify-item-list',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './modify-item-list.component.html',
  styleUrl: './modify-item-list.component.css'
})
export class ModifyItemListComponent implements OnInit {

  eventForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventServiceService: EventServiceService,
  ) { 
    this.eventForm = this. formBuilder.group(({
      id: ['', Validators.required],
      name: ['', Validators.required],
      inStock: ['false', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    }));
  }

  ngOnInit() {}

  onSubmit() {
    const eventData = this.eventForm.value;
    this.eventServiceService.addEvent(eventData);
    this.eventForm.reset();
  }

}
