import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintAdded=new EventEmitter<{serverName:string,serverContent:string}>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }

  onAddBlueprint() {
    this.bluePrintAdded.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }
  child(){
    console.log('child 2')
    return  'child 2';
  }
}
