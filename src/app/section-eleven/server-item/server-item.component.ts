import {Component, Input, OnInit} from '@angular/core';
import {ServerService} from '../../services/server.service';
import {ServerEleven} from '../../common/serverEleven';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.scss']
})
export class ServerItemComponent implements OnInit {
  private serverService: ServerService;

  constructor(serverService: ServerService) {
    this.serverService = serverService;
  }

  @Input() selectedServer: ServerEleven;
  server: ServerEleven;

  ngOnInit(): void {
  }

}
