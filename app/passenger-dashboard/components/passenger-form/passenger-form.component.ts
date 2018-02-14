import { Component, Input, Output } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';
import { EventEmitter } from '@angular/forms/src/facade/async';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" (ngSubmit)="handleSubmit(form.value, form.valid)" novalidate>
            <div>
                Passenger Name: 
                <input 
                    type="text"
                    name="fullname"
                    #fullname="ngModel"
                    [ngModel]="detail?.fullname"
                    required>
            </div>
            <div>
                Passenger ID: 
                <input 
                    type="number"
                    name="id"
                    required
                    #id="ngModel"
                    [ngModel]="detail?.id">                
            </div>


            <div>
                <label>
                    <input type="checkbox"
                           name="checkedIn"
                           [ngModel]="detail?.checkedIn"
                           (ngModelChange)="toggleCheckIn($event)">
                </label>
            </div>

            <div *ngIf="form.value.checkedIn">
                Check In Date:
                <input
                    type="number"
                    name="checkInDate"
                    [ngModel]="detail?.checkInDate">
            </div>
            <div>
                Luggage:
                <select name="baggage"
                        [ngModel]="detail?.baggage">
                    <option *ngFor="let item of baggage" [value]="item.key" [selected]="item.key === detail?.baggage">
                        {{item.value}}
                    </option>
                </select>

            </div>
            <button type="submit" [disabled]="form.invalid">Update Passenger</button>
        </form>
    `
})

export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();
    
    baggage: Baggage[] = [{
        key: 'none',
        value: 'No Baggage'
    },{
        key: 'hand-only',
        value: 'Hand Baggage'
    },{
        key: 'hold-only',
        value: 'Hold Baggage'
    },{
        key: 'hand-and-hold',
        value: 'Hand and Hold Baggage'
    }];

    toggleCheckIn(checkedIn: boolean) {
        if(checkedIn) {
            this.detail.checkInDate = +new Date();
        }
    }

    handleSubmit(passenger: Passenger, valid: boolean) {
        if (valid) {
            this.update.emit(passenger);
        }
    }
}