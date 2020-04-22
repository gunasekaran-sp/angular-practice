import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()
export class UsersService {
    constructor(private countService: CountService) {}
    activeUsers: string[] = ["Max", "Anna"];
    inactiveUsers: string[] = ["Chris", "Manu"];

    setToActive(id) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.countService.incrementSetActiveCount();
    }
    
    setToInactive(id) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.countService.incrementSetInactiveCount();
    }
}