import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-two',
  templateUrl: './assignment-module-four.component.html',
  styleUrls: ['./assignment-module-four.component.scss']
})
export class AssignmentModuleFourComponent implements OnInit {
  numbers: number[] = [];

  constructor() { }



  ngOnInit(): void {
  }

  incrementEvent(event: number): void {
    if (event === 0 && this.numbers.length > 1 ) {
      this.numbers = [];
    }
    this.numbers.push(event);
  }
}
