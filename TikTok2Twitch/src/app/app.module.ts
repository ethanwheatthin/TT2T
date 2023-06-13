import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WebSocketService } from '../app/services/web-socket.service';
import {MatCardModule} from '@angular/material/card';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    SocketIoModule.forRoot(config),

  ],
  providers: [    WebSocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
