import {Component, Input, OnInit} from '@angular/core';
import {Server} from '../../common/server';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  constructor() { }

  @Input() element: Server;


  ngOnInit(): void {
  }

}
