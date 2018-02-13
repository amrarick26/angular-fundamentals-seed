import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate>
            {{detail | json}}
            <div>
                Passenger Name: 
                <input 
                    type="text"
                    name="fullname"
                    [ngModel]="detail?.fullname">
            </div>
            <div>
                Passenger ID: 
                <input 
                    type="number"
                    name="id"
                    [ngModel]="detail?.id">
            </div>


            <div>
                <label>
                    <input type="radio"
                           name="checkedIn"
                           [value]="true"
                           [ngModel]="detail?.checkedIn"
                           (ngModelChange)="toggleCheckIn($event)">
                        Yes
                </label>
                <label>
                    <input type="radio"
                           name="checkedIn"
                           [value]="false"
                           [ngModel]="detail?.checkedIn"
                           (ngModelChange)="toggleCheckIn($event)">
                        No
            </label>
            </div>

            <div *ngIf="form.value.checkedIn">
                Check In Date:
                <input
                    type="number"
                    name="checkInDate"
                    [ngModel]="detail?.checkInDate">
            </div>
            {{form.value | json}}
        </form>
    `
})

export class PassengerFormComponent {
    @Input()
    detail: Passenger;
    toggleCheckIn(checkedIn: boolean) {
        if(checkedIn) {
            this.detail.checkInDate = +new Date();
        }
    }
}