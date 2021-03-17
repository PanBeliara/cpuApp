import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cpu } from '../model/cpu';
import { CpuService } from '../service/cpu.service';
import { Socket } from '../model/socket';
import { SocketService } from '../service/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpu-create',
  templateUrl: './cpu-create.component.html',
  styleUrls: ['./cpu-create.component.css']
})
export class CpuCreateComponent implements OnInit {
  cpu: Cpu = {} as Cpu;
  public newCpu: FormGroup
  sockets: Socket[];
  errorMessage: string;

  constructor(private cpuService: CpuService, private socketService: SocketService, private formBuilder: FormBuilder, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.socketService.findAll().subscribe( data => {
      this.sockets = data;

      this.generateForm();
    });
  }

  generateForm() {
    this.newCpu = this.formBuilder.group({
      brand: ['', [Validators.required, Validators.minLength(3)]],
      model: ['', [Validators.required, Validators.minLength(3)]],
      clockspeed: ['', [Validators.required, Validators.minLength(1)]],
      cores_amount: ['', [Validators.required, Validators.min(1)]],
      threads_amount: ['', [Validators.required, Validators.min(1)]],
      tdp: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(1)]],
      socket: [this.sockets[0].id, [Validators.min(0)]]
    });
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
        this.createCpu();
      });
    }
  }

  createCpu(): void {
    this.cpuService.save(this.cpu).subscribe(data => {
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