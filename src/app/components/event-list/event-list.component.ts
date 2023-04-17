import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  events: Event[] = [];

  constructor(private router: Router, private eventService: EventService) {

  }

  ngOnInit(): void {
    this.eventService.getEvents()
    .subscribe(data => {
      this.events = this.events.filter(e => e !== event)})
  }
}
