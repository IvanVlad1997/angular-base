import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigmnet-module-two',
  templateUrl: './assigmnet-module-two.component.html',
  styleUrls: ['./assigmnet-module-two.component.scss']
})
export class AssigmnetModuleTwoComponent implements OnInit {

  constructor() { }

  toggleButton: boolean = false;
  array: Date[] = [];

  ngOnInit(): void {
  }

  onButtonToggle(): void {
    this.toggleButton = !this.toggleButton;
    this.array.push(new Date());
  }

  getBackground(index: number): string {
    if (index >= 5) {
      return 'blue';
    }
  }
}
