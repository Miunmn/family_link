import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

// corr: origin
@WebSocketGateway({ cors: true })
export class MessageGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Connected');
    });
  }

  @SubscribeMessage('MY_CURRENT_LOCATION')
  handleNewLocation(@MessageBody() body: any) {
    this.server.emit('UPDATE_CURRENT_LOCATION', body);
  }
  
}
