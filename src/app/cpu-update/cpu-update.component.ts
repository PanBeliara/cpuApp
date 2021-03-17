import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cpu } from '../model/cpu';
import { Socket } from '../model/socket';
import { CpuService } from '../service/cpu.service';
import { SocketService } from '../service/socket.service';

@Component({
  selector: 'app-cpu-update',
  templateUrl: './cpu-update.component.html',
  styleUrls: ['./cpu-update.component.css']
})
export class CpuUpdateComponent implements OnInit {

  cpu: Cpu = {} as Cpu;
  public newCpu: FormGroup
  private id: string;
  sockets: Socket[];
  socket: Socket;
  errorMessage: string;
  
  constructor(private cpuService: CpuService, private socketService: SocketService, private router: Router, private formBuilder: FormBuilder, private route:ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.cpuService.find(this.id).subscribe(data => {
      this.cpu = data;
      
      this.generateForm();
    })
  }

  generateForm(): void {
    this.socketService.findAll().subscribe(data => {
      this.sockets = data;

      var socketIndex = this.sockets.map(function(e) { return e.id; }).indexOf(this.cpu.socket.id);

      this.newCpu = this.formBuilder.group({
        brand: [this.cpu.brand, [Validators.required, Validators.minLength(3)]],
        model: [this.cpu.model, [Validators.required, Validators.minLength(3)]],
        clockspeed: [this.cpu.clockspeed, [Validators.required, Validators.minLength(1)]],
        cores_amount: [this.cpu.cores_amount, [Validators.required, Validators.min(1)]],
        threads_amount: [this.cpu.threads_amount, [Validators.required, Validators.min(1)]],
        tdp: [this.cpu.tdp, [Validators.required, Validators.min(1)]],
        price: [this.cpu.price, [Validators.required, Validators.min(1)]],
        socket: [this.sockets[socketIndex].id, [Validators.min(0)]]
      });
    })
  }

  onSubmit(): void {
    if(this.newCpu.valid) {
      this.newCpu.valueChanges.subscribe();

      this.cpu.id = null;
      this.cpu.brand = this.newCpu.get("brand").value;
      this.cpu.model = this.newCpu.get("model").value;
      this.cpu.clockspeed = this.newCpu.get("clockspeed").value;
      this.cpu.cores_amount = this.newCpu.get("cores_amount").value;
      this.cpu.threads_amount = this.newCpu.get("threads_amount").value;
      this.cpu.tdp = this.newCpu.get("tdp").value;
      this.cpu.price = this.newCpu.get("price").value;

      this.socketService.find(this.newCpu.get("socket").value).subscribe(data => {
        this.cpu.socket = data;
        this.updateCpu();
      });
    }
  }

  updateCpu(): void {
    this.cpuService.update(this.cpu, this.id).subscribe(data => {
      this.router.navigateByUrl("/");
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
    });
  }

  get brand() {
    return this.newCpu.get("brand");
  }
  get model() {
    return this.newCpu.get("model");
  }
  get clockspeed() {
    return this.newCpu.get("clockspeed");
  }
  get cores_amount() {
    return this.newCpu.get("cores_amount");
  }
  get threads_amount() {
    return this.newCpu.get("threads_amount");
  }
  get tdp() {
    return this.newCpu.get("tdp");
  }
  get price() {
    return this.newCpu.get("price");
  }
}
