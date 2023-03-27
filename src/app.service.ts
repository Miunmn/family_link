import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola mai lov, perdon si no respondo mucho :(';
  }
}
