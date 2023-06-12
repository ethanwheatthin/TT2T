import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  constructor(private socket: Socket) { }

  public connect(username: any): void {
    this.socket.connect();
    this.connectToTikTok(username)
  }

  public connectToTikTok(username: any): void{
    this.socket.emit('setUniqueId', username);
  }

  public disconnect(): void {
    this.socket.disconnect();
  }

  public sendMessage(event: string, data?: any): void {
    this.socket.emit(event, data);
  }

  public onMessage(event: string): Observable<any> {
    return this.socket.fromEvent(event);
  }

  public dispatchEvent(event: any): Observable<any> {
    return this.socket.emit('dispatch-event', event);
  }
}
