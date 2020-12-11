import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent {

  isHidden: boolean = true;

  toggle(event: MouseEvent): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.isHidden = !this.isHidden;
  }

}
