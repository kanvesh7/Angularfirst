import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  styles: ['* {color: blue}'],
  templateUrl: './servers.component.html',
  // template:`<app-server></app-server>
  //           <app-server></app-server>
  //           `,
  //styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverId: number = 10;
  serverStatus: string = 'offline';
  trueorfalse: boolean = false;
  multiplevalues: number[] = [10, 20, 30];
  serverCreationStatus = 'No Server was created!';
  serverName = '';
  serverNameTwoWay = '';
  serverCreated: boolean = false;
  servers = ["Test Server1", "Test Server 2"];
  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 2000);
  // }

  ngOnInit(): void {
    
  }

  onCreatedServer(){
    this.serverCreationStatus = "Server was created!";
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event : any){
    this.serverName = event.target.value;
  }
}
