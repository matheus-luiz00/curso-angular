import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public canAddServers = false;
  public serverCreationStatus = 'No server was created';
  public serverName = 'Valor inicial';
  public serverCreated = false;
  public servers = ['Dft Server 1', 'Dft Server 2']

  constructor() {
    setTimeout(() => {
      this.canAddServers = true;
    }, 5000)
   }

  ngOnInit(): void {
  }

  onServerCreated() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Its name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
