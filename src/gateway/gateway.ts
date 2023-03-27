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
  
  @SubscribeMessage('SEND_LOCATION')
  send(@MessageBody() body: any) {
    this.server.emit('RETURN_LOCATION', body);
  }

  @SubscribeMessage('UPDATE_REQUEST_LOCATION')
  updateLocation(@MessageBody() sender: any) {
    this.server.emit('GET_LOCATION', sender);
  }

}
