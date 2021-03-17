import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Socket } from '../model/socket';
import { SocketService } from '../service/socket.service';

@Component({
  selector: 'app-socket-create',
  templateUrl: './socket-create.component.html',
  styleUrls: ['./socket-create.component.css']
})
export class SocketCreateComponent implements OnInit {

  socket: Socket = {} as Socket;
  public newSocket: FormGroup;
  errorMessage: string;

  constructor(private socketService: SocketService, private formBuilder: FormBuilder, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.newSocket = this.formBuilder.group({
      name: ['',[
        Validators.required,
        Validators.minLength(2)
      ]]
    });
  }

  onSubmit() {
    this.newSocket.valueChanges.subscribe();

    if(this.newSocket.valid) {
      this.socket.id = null;
      this.socket.name = this.newSocket.get("name").value;

      this.createSocket();
    }
  }

  createSocket(): void {
    this.socketService.save(this.socket).subscribe(data => {
      this.router.navigateByUrl('/');
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
