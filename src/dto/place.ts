import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class PlaceDTO {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly describle: string;

    @IsNumber()
    @IsNotEmpty()
    readonly time: number;

}