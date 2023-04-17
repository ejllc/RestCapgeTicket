import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent {

  event: Event = new Event();

  constructor(private router: Router, private eventService: EventService) {

  }

  createEvent(): void {
    this.eventService.createEvent(this.event)
      .subscribe(data => {
        alert("Evento generado de forma correcta");
      });

  };
}
