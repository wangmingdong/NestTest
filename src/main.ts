import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, ValidationError, HttpException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors: ValidationError[]) => {
        return new HttpException({code: 40004, error_msg: `参数错误：${JSON.stringify(errors[0].constraints)}`}, 400);
    }
}));
  await app.listen(3000);
}
bootstrap();
