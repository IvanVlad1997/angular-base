import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Server} from '../../common/server';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent implements OnInit {

  constructor() { }

  @Output() serverCreated: EventEmitter<Server> = new EventEmitter<Server>();
  @Output() bluePrintCreated: EventEmitter<Server> = new EventEmitter<Server>();
  serverName: string;
  serverContent: string;

  @ViewChild('inp', {static: true})
  testViewChild: ElementRef;

  ngOnInit(): void {
  }

  onAddServer(): void {
    const serverData: Server = {
      name: this.serverName,
      content: this.serverContent,
      type: 'server'
    };
    this.serverCreated.emit(serverData);

    // For learning ViewChild
    console.log(this.testViewChild);
  }

  onAddBlueprint(): void {
    const serverData: Server = {
      name: this.serverName,
      content: this.serverContent,
      type: 'blueprint'
    };
    this.bluePrintCreated.emit(serverData);
  }
}
