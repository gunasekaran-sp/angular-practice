import { Component } from '@angular/core'

@Component({
    selector: 'app-event-binding',
    templateUrl: './eventbinding.component.html',
    styleUrls: ['./eventbinding.component.css']
  })
  export class EventBindingComponent {
      numbers: number[] = [];
    onGameNumber(num) {
        this.numbers.push(num);
    }
    isEven(num) {
        console.log(num);
        return num%2 == 0;
    }
  }
  