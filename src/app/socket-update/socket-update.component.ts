import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from '../model/socket';
import { SocketService } from '../service/socket.service';

@Component({
  selector: 'app-socket-update',
  templateUrl: './socket-update.component.html',
  styleUrls: ['./socket-update.component.css']
})
export class SocketUpdateComponent implements OnInit {

  socket: Socket = {} as Socket;
  public newSocket: FormGroup
  private id: string;
  errorMessage: string;
  
  constructor(private socketService: SocketService, private router: Router, private formBuilder: FormBuilder, private route:ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.socketService.find(this.id).subscribe(data => {
      this.socket = data;
      
      this.generateForm();
    })
  }

  generateForm(): void {
    this.newSocket = this.formBuilder.group({
      name: [this.socket.name, [
        Validators.required,
        Validators.minLength(2)
      ]]
    });
  }

  onSubmit(): void {
    this.newSocket.valueChanges.subscribe();

    if(this.newSocket.valid) {
      this.socket.id = null;
      this.socket.name = this.newSocket.get("name").value;

      this.updateSocket();
    }
  }

  updateSocket(): void {
    this.socketService.update(this.socket, this.id).subscribe(data => {
      this.router.navigateByUrl("/");
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
    });
  }

  get name() {
    return this.newSocket.get("name");
  }
}
