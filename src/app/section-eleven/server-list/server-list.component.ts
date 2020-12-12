import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';
import {ServerEleven} from '../../common/serverEleven';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {
  private serverService: ServerService;

  constructor(serverService: ServerService) {
    this.serverService = serverService;
  }
  servers: ServerEleven[];
  selectedServer: ServerEleven;

  ngOnInit(): void {
    this.servers = this.serverService.getServers();
    this.serverService.selectedServer.subscribe((server: ServerEleven) => {
      this.selectedServer = server;
    });
  }

  selectServer(server: ServerEleven): void {
    this.serverService.selectedServer.emit(server);
  }
}
