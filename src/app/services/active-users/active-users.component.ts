import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(private userService: UsersService) {}
  users: string[] = this.userService.activeUsers;

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
