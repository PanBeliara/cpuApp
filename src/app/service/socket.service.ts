import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socket } from '../model/socket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private serviceUrl: string;
  private socketsUrl: string;

  constructor(private http: HttpClient) { 
    this.serviceUrl = 'http://localhost:8080';
    this.socketsUrl = this.serviceUrl + '/sockets';
  }

  public findAll(): Observable<Socket[]> {
    return this.http.get<Socket[]>(this.socketsUrl);
  }
  public find(id: string): Observable<Socket> {
    return this.http.get<Socket>(this.socketsUrl + "/" + id);
  }

  public save(Socket: any): Observable<any> {
    let result: Observable<Object>;
    if(Socket['href']) {
      result = this.http.put(Socket.href, Socket);
    }
    else {
      result = this.http.post(this.socketsUrl, Socket);
    }
    return this.http.post<Socket>(this.socketsUrl, Socket);
  }

  public update(Socket: any, id: string): Observable<any> {
    return this.http.put(this.socketsUrl + "/" + id, Socket);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(this.socketsUrl + "/" + id);
  }
}
