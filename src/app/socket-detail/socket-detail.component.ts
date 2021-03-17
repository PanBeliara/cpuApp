import { Component, OnInit } from '@angular/core';
import { Socket } from '../model/socket';
import { SocketService } from '../service/socket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CpuService } from '../service/cpu.service';



@Component({
  selector: 'app-socket-detail',
  templateUrl: './socket-detail.component.html',
  styleUrls: ['./socket-detail.component.css']
})
export class SocketDetailComponent implements OnInit {

  socket: Socket = {} as Socket;
  private id: string;
  public cpusAmount;

  public popoverTitle: string;
  public popoverMessage: string;
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  errorMessage: string;

  constructor(private socketService: SocketService, private cpuService: CpuService, private route:ActivatedRoute, private router: Router) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.socketService.find(this.id).subscribe(data => {
      this.socket = data;
      this.cpusAmount = this.socket.cpus.length;
    })
  }

  deleteSocket(id: string): void {
    this.socketService.delete(id).subscribe(data => {
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
    });
  }
  deleteCpu(id: string): void {
    this.cpuService.delete(id).subscribe(data => {
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      })
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
    });
  }
}
