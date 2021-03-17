import { Component, OnInit } from '@angular/core';
import { Socket } from '../model/socket';
import { SocketService } from '../service/socket.service';

@Component({
  selector: 'app-socket-list',
  templateUrl: './socket-list.component.html',
  styleUrls: ['./socket-list.component.css']
})
export class SocketListComponent implements OnInit {

  sockets: Socket[];
  errorMessage: string;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.findAll().subscribe(data => {
      this.sockets = data;
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
    });
  }
}
