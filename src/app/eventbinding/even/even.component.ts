import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'app-even',
    templateUrl: './even.component.html',
    styleUrls: ['./even.component.css'],
    encapsulation: ViewEncapsulation.None 
  })
  export class EvenComponent {
    @Input() number: number;
  }
  