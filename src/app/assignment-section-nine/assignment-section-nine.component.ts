import { Component, OnInit } from '@angular/core';
import {Counter} from '../services/counter';

@Component({
  selector: 'app-assignment-section-nine',
  templateUrl: './assignment-section-nine.component.html',
  styleUrls: ['./assignment-section-nine.component.scss']
})
export class AssignmentSectionNineComponent implements OnInit {

  constructor(counter: Counter) {
    this.counter = counter;
  }

  counter: Counter;

  ngOnInit(): void {
  }

}
