import { Controller, Get, Query, Post, Body, Put, Param, Delete, HttpException, HttpStatus, UseInterceptors } from '@nestjs/common';
import {LoggingInterceptor} from './../logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('cats')
export class CatsController {
  @Get()
  async findAll(): Promise<any> {
    return 'This action returns all cats;';
  }
  @Post()
  async create(): Promise<any> {
    return 'This action adds a new cat;';
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: any) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (id.length > 2) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message'
      }, 403)
    } else {
      return `This action removes a #${id} cat`;
    }
  }
}
