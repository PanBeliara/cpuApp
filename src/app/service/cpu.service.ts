import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cpu } from '../model/cpu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  private serviceUrl: string;
  private cpusUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = 'http://localhost:8080';
    this.cpusUrl = this.serviceUrl + '/cpus';
  }

  public findAll(): Observable<Cpu[]> {
    return this.http.get<Cpu[]>(this.cpusUrl);
  }
  public find(id: string): Observable<Cpu> {
    return this.http.get<Cpu>(this.cpusUrl + "/" + id);
  }

  public save(cpu: any): Observable<any> {
    let result: Observable<Object>;
    if(cpu['href']) {
      result = this.http.put(cpu.href, cpu);
    }
    else {
      result = this.http.post(this.cpusUrl, cpu);
    }
    return this.http.post<Cpu>(this.cpusUrl, cpu);
  }

  public update(cpu: any, id: string): Observable<any> {
    return this.http.put(this.cpusUrl + "/" + id, cpu);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(this.cpusUrl + "/" + id);
  }
}
