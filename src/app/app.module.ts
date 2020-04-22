import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventBindingComponent } from './eventbinding/eventbinding.component';
import { GameControlComponent } from './eventbinding/game-control/game-control.component';
import { OddComponent } from './eventbinding/odd/odd.component';
import { EvenComponent } from './eventbinding/even/even.component';
import { ServicesComponent } from './services/services.component';
import { ActiveUsersComponent } from './services/active-users/active-users.component';
import { InactiveUsersComponent } from './services/inactive-users/inactive-users.component';
import { UsersService } from './services/users.service';
import { CountService } from './services/count.service';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingComponent,
    DirectivesComponent,
    EventBindingComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ServicesComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [UsersService, CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
