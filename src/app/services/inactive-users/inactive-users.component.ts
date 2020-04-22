import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { CountService } from '../count.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(private usersService: UsersService) {}
  
  users: string[] = this.usersService.inactiveUsers;

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
