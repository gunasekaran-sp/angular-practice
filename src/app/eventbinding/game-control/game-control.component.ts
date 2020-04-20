import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
  })
  export class GameControlComponent {
      @Output("gameNumber") numberEvent: EventEmitter<number> = new EventEmitter();
        private gameNum = 1;
        private gameInterval: any = null;
        onGameStart() {
            if(this.gameInterval !== null) {
                clearInterval(this.gameInterval);
            }
            this.gameInterval = setInterval(() => {
                this.numberEvent.emit(this.gameNum++);
            }, 1000);
        }
        onGameStop() {
            clearInterval(this.gameInterval);
        }
  }
  