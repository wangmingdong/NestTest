import { Controller, Get, Post, Delete, Param, Put, Body, HttpException, HttpStatus, UseInterceptors } from "@nestjs/common";
import { Photo } from "./photo.entity";
import { PhotoService } from "./photo.service";
import { LoggingInterceptor } from "src/logging.interceptor";
import { CreatePhotoDto } from "./create-photo.dto";

@UseInterceptors(LoggingInterceptor)
@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}

    @Get()
    findAll(): Promise<Photo[]> {
      return this.photoService.findAll();
    }

    @Post()
    // create(): Promise<any> {
    //   return this.photoService.addOne();
    // }
    create(@Body() createPhotoDto: CreatePhotoDto): Promise<any> {
      if (!createPhotoDto.name) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'name is not empty',
        }, 403);
      }
      return this.photoService.addOne(createPhotoDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<any> {
        return this.photoService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() photoData: any) {
      if (!photoData.name) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'name is not empty',
        }, 403);
      }
        return this.photoService.update(id, photoData);
    }
}