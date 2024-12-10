import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventServiceService } from '../services/event-service.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


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
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.eventForm = this. formBuilder.group(({
      id: ['', Validators.required],
      nameOfEvent: ['', Validators.required],
      hostName: ['', Validators.required],
      email: ['', Validators.required],
      isAdmin: ['false', Validators.required],
    }));
  }

  ngOnInit() {}

  onSubmit() {
    const eventData = this.eventForm.value;
  
    if (eventData.id) {
      this.eventServiceService.updateEvent(eventData).subscribe(() => {
        this.router.navigate(['/event']);
        this.eventForm.reset();
      });
    } else {
      this.eventServiceService.addEvent(eventData).subscribe(() => {
        this.router.navigate(['/event']);
        this.eventForm.reset();
      });
    }
  }
  

}
