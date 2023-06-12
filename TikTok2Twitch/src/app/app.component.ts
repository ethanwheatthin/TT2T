import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TikTok2Twitch';

  constructor(public webSocketService: WebSocketService){}

  messages: any = []
  ngOnInit(): void {
    // let username = 'wateryshow'
    let username = 'alacajam'

    this.webSocketService.connect(username)
    this.webSocketService.onMessage('chat').subscribe(
      (message) => {
        console.log('Received message:', message);
        this.messages.push(message)
      },
      (error) => {
        console.error('Error receiving message:', error);
      }
    );
  }


  connect(){

  }

}
