import { Component, OnInit } from "@angular/core"
import { ToastrService } from "../common/toastr.service"
import { ActivatedRoute } from "@angular/router"
import { IEvent } from "./shared";

@Component({
	template: `
		<div>
			<h1>Upcoming Angular Events</h1>
			<hr>
			<div *ngFor="let event of events" class="col-md-5">
				<event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
			</div>
		</div>
	`
})
export class EventsListComponent implements OnInit {
	events: IEvent[]

	constructor(
		private route: ActivatedRoute,
		private toastr: ToastrService
	) { }

	ngOnInit() {
		this.events = this.route.snapshot.data['events']
	}

	handleThumbnailClick(eventName: string) {
		this.toastr.success(eventName)
	}
}