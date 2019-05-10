import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>,
    ){}

    async findAll(): Promise<Photo[]> {
        return await this.photoRepository.find();
    }

    async addOne(): Promise<Photo> {
        const newPhoto = new Photo();
        newPhoto.name = `新增${Math.floor(Math.random() * 1000)}`;
        newPhoto.description = `描述${Math.floor(Math.random() * 1000)}`;
        newPhoto.filename = `photo${Math.floor(Math.random() * 1000)}.jpg`;
        newPhoto.views = 0;
        newPhoto.isPublished = false;
        // const savePhoto = await this.photoRepository.save(this.photoRepository.create(newPhoto));
        const savePhoto = await this.photoRepository.save(newPhoto);
        return savePhoto;
    }

    async delete(id: number): Promise<any> {
        return await this.photoRepository.delete(id);
    }

    async update(id: number, photo: Photo): Promise<any> {
        let toUpdate = await this.photoRepository.findOne(id);
        let updated = Object.assign(toUpdate, photo);
        return await this.photoRepository.save(updated);
    }
}