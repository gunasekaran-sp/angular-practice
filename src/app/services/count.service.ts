import { Injectable } from "@angular/core";

@Injectable()
export class CountService {
    activeActionCount: number = 0;
    inactiveActionCount: number = 0;

    incrementSetActiveCount() {
        this.activeActionCount++;
    }
    incrementSetInactiveCount() {
        this.inactiveActionCount++;
    }
}