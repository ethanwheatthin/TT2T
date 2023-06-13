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

  tempTestMessag = {
    "comment": "THIS IS ATEXT MESSAGE!!",
    "userId": "6588555847659716613",
    "secUid": "MS4wLjABAAAAduLAOqOJWFx3HaG6kDEpx1AF2SabjmeEANdkz0wHfpyS_lLrASdhocqsAvyqJXP6",
    "uniqueId": "daniellepillado",
    "nickname": "Dani",
    "profilePictureUrl": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/b085052d32a9fcaea35d470b306971c8~c5_100x100.webp?x-expires=1686844800&x-signature=yHVOW7RcEfSO4ObWo6wkDPk0nTU%3D",
    "followRole": 1,
    "userBadges": [
        {
            "badgeSceneType": 1,
            "type": "pm_mt_moderator_im",
            "name": "Moderator"
        }
    ],
    "userDetails": {
        "createTime": "0",
        "bioDescription": "",
        "profilePictureUrls": [
            "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/b085052d32a9fcaea35d470b306971c8~tplv-tiktok-shrink:72:72.webp?x-expires=1686844800&x-signature=7jjSlZBPDQxRnYlGjpGAsk0Tviw%3D",
            "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/b085052d32a9fcaea35d470b306971c8~c5_100x100.webp?x-expires=1686844800&x-signature=yHVOW7RcEfSO4ObWo6wkDPk0nTU%3D",
            "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/b085052d32a9fcaea35d470b306971c8~c5_100x100.webp?x-expires=1686844800&x-signature=qxbssAU9DRSeUd6rcPfv2orI8og%3D",
            "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/b085052d32a9fcaea35d470b306971c8~c5_100x100.jpeg?x-expires=1686844800&x-signature=WNmKv9RUIBe4p4ACs9Xa9BueRyU%3D"
        ]
    },
    "followInfo": {
        "followingCount": 528,
        "followerCount": 544,
        "followStatus": 1,
        "pushStatus": 0
    },
    "isModerator": true,
    "isNewGifter": false,
    "isSubscriber": false,
    "topGifterRank": null,
    "msgId": "7244215049563376426",
    "createTime": "1686675277385"
}


  ngOnInit(): void {
    let username = 'ruflesscat'
    // this.webSocketService.connect(username)
    // this.webSocketService.onMessage('chat').subscribe(
    //   (message) => {
    //     console.log('Received message:', message);
    //     this.messages.push(message)
    //   },
    //   (error) => {
    //     console.error('Error receiving message:', error);
    //   }
    // );
    this.messages.push(this.tempTestMessag)
    this.messages.push(this.tempTestMessag)
    this.messages.push(this.tempTestMessag)
    this.messages.push(this.tempTestMessag)
    this.messages.push(this.tempTestMessag)

  }


  CleanTikTokMessage(message: any){
    console.log("🚀 ~ file: app.component.ts:74 ~ AppComponent ~ CleanTikTokMessage ~ message:", message)
  }



}
