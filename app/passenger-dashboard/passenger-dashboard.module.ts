import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// services
import { PassengerDashboardService } from './passenger-dashboard.service';


@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerViewerComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    exports: [
        PassengerViewerComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})

export class PassengerDashboardModule {}