import { Component, OnInit } from '@angular/core';
import {Server} from '../common/server';

@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.scss']
})
export class SectionFiveComponent implements OnInit {

  constructor() { }

  serverElements: Server[] = [
    {
      type: 'server',
      name: 'adsad',
      content: 'asdsad'
    },
    {
      type: 'blueprint',
      name: 'adsad',
      content: 'asdsad'
    }
  ];

  ngOnInit(): void {
  }

  onServerAdded(serverData: Server): void {
    this.serverElements.push({
      type: serverData.type,
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(serverData: Server): void {
    this.serverElements.push({
      type: serverData.type,
      name: serverData.name,
      content: serverData.content
    });
  }
}
