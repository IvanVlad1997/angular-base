import { Injectable} from '@angular/core';

@Injectable()
export class Counter {
  inactiveToActive = 0;
  activeToInactive = 0;

  incrementActiveToInactive(): void {
    this.activeToInactive++;
    console.log(this.activeToInactive);
  }

  incrementInactiveToActive(): void {
    this.inactiveToActive++;
    console.log(this.inactiveToActive);
  }
}
