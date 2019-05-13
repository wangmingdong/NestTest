import { IsNotEmpty, IsInt } from 'class-validator';

export class CreatePhotoDto {
    
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly description: string;

    @IsInt()
    readonly filename: string;
    
    readonly views: number;
    
    readonly isPublished: boolean;
}