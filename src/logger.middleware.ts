import { Injectable, NestMiddleware, Req } from '@nestjs/common';
import { Request, Response} from 'express';

@Injectable()
export class LoggerMiddleware implements  NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    // console.log(req);
    // console.log(res);
    console.log(`Request...url:${req.url},method: ${req.method}`);
    next();
  }
}
