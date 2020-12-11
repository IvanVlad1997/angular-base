import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  interval;

  @Output() incrementingCounterEvent: EventEmitter<number> = new EventEmitter<number>();
  counter: number;

  ngOnInit(): void {
  }

  onStart() {
    this.counter = 0;
    clearInterval(this.interval);
    this.interval = setInterval(() => this.incrementingCounterEvent.emit(this.counter++), 1000);
  }

  onStop() {
    this.counter = 0;
    clearInterval(this.interval);
  }
}
