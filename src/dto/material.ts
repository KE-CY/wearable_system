import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class MaterialDTO {
    @IsNumber()
    @IsNotEmpty()
    readonly userId: number;

    @IsString()
    @IsNotEmpty()
    readonly placeId: number;

    @IsString()
    @IsNotEmpty()
    readonly pace: number;

    @IsNumber()
    @IsNotEmpty()
    readonly distance: number;

    @IsNumber()
    @IsNotEmpty()
    readonly calories: number;

    @IsNumber()
    @IsNotEmpty()
    readonly avgHeartRate: number;

    @IsNumber()
    @IsNotEmpty()
    readonly avgSpeed: number;
}