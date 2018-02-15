import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `    
        <div>
            <passenger-count [items]="passengers"></passenger-count>

            <div *ngFor="let passenger of passengers;">
              {{passenger.fullname}}
            </div>

            <passenger-detail *ngFor="let passenger of passengers;" [detail]="passenger" (view)="handleView($event)" (remove)="handleRemove($event)" (edit)="handleEdit($event)"></passenger-detail>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor(
      private passengerService: PassengerDashboardService,
      private router: Router
    ) {

    }

    ngOnInit() {
      this.passengerService
        .getPassengers()
        .subscribe((data: Passenger[]) => this.passengers = data);
    }

    handleView(event: Passenger) {
      this.router.navigate(['/passengers', event.id]);
    }

    handleRemove(event: Passenger) {
      this.passengerService
        .removePassenger(event)
        .subscribe((data: Passenger) => {
          this.passengers = this.passengers.filter((passenger: Passenger) => {
            return passenger.id !== event.id;
          });
        });
    }

    handleEdit(event: Passenger) {
      this.passengerService
        .updatePassenger(event)
        .subscribe((data: Passenger) => {
          this.passengers = this.passengers.map((passenger: Passenger) => {
            if (passenger.id === event.id) {
              passenger = Object.assign({}, passenger, event);
            }
            return passenger;
          });
        });

    }
}