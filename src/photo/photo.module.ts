import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { photoProviders } from './photo.providers';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { PhotoController } from './photo.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Photo]),
    ],
    controllers: [PhotoController],
    providers: [
        // ...photoProviders,
        PhotoService,
    ],
})
export class PhotoModule {}