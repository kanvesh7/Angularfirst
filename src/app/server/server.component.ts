import { Component } from "@angular/core"; //Using code from a different location

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[`
    .online{
      color:white;
    }
  `  
  ]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
}
