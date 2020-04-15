import { Component } from '@angular/core';

@Component({
    selector: 'directives-practice',
    templateUrl: "./directives.component.html",
    styles: [`
    .white {
        color: white;
    }    
    `]
})
export class DirectivesComponent {
    showDetails = true;
    clicks = [];
    onDisplayDetails() {
        this.toggleShowDetails();
        this.clicks.push(new Date());
    }

    toggleShowDetails() {
        this.showDetails = !this.showDetails;
    }
}