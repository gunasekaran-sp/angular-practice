import { Component } from '@angular/core';
import { CountService } from './count.service';

@Component({
    selector: "services-practice",
    templateUrl: "./services.component.html"
})
export class ServicesComponent {
    constructor(public countService: CountService) {}

}