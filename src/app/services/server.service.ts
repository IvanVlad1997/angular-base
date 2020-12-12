import {EventEmitter, Injectable} from '@angular/core';
import {ServerEleven} from '../common/serverEleven';

@Injectable()
export class ServerService {

  selectedServer: EventEmitter<ServerEleven> = new EventEmitter<ServerEleven>();

  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers(): ServerEleven[] {
    return this.servers;
  }

  getServer(id: number): ServerEleven {
    const server = this.servers.find(
      (serverEleven: ServerEleven) => {
        return serverEleven.id === id;
      }
    );
    return server;
  }

  editServer(serverReceived: ServerEleven): void {
    const server = this.servers.find(
      (serverEleven: ServerEleven) => {
        return serverEleven.id === serverReceived.id;
      }
    );
    if (server) {
      server.name = serverReceived.name;
      server.status = serverReceived.status;
    }
  }

}
