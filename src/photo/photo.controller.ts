import { Controller, Get, Post, Delete, Param, Put, Body } from "@nestjs/common";
import { Photo } from "./photo.entity";
import { PhotoService } from "./photo.service";

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}

    @Get()
    findAll(): Promise<Photo[]> {
      return this.photoService.findAll();
    }

    @Post()
    create(): Promise<any> {
      return this.photoService.addOne();
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<any> {
        return this.photoService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() photoData: any) {
        return this.photoService.update(id, photoData);
    }
}