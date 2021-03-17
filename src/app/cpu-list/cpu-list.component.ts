import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cpu } from '../model/cpu';
import { CpuService } from '../service/cpu.service';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.css']
})
export class CpuListComponent implements OnInit {

  cpus: Cpu[];

  public popoverTitle: string;
  public popoverMessage: string;
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  errorMessage: string;

  constructor(private cpuService: CpuService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.cpuService.findAll().subscribe(data => {
      this.cpus = data;
    })
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
