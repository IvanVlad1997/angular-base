import {Component, Input, OnInit} from '@angular/core';
import {Status} from '../../common/status';
import {ServerEleven} from '../../common/serverEleven';
import {ServerService} from '../../services/server.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss']
})
export class ServerEditComponent implements OnInit {

  private serverService: ServerService;

  constructor(serverService: ServerService) {
    this.serverService = serverService;
  }

  @Input() selectedServer: ServerEleven;
  name: string;
  serverStatus: Status;
  typesOfStatus: Status[] = [Status.Inactive, Status.Active];

  ngOnInit(): void {

  }

  editServer(): void {
    let server: ServerEleven = {
      id: this.selectedServer.id,
      name: this.name,
      status: this.serverStatus
    };
    this.serverService.editServer(server);
  }
}
