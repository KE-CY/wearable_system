import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from 'src/entity/place';
import { PlaceService } from 'src/service/place';
import { PlaceController } from 'src/controller/place/place.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Place])],
    providers: [PlaceService],
    controllers: [PlaceController],
    exports: [PlaceService],
})
export class PlaceModule { }
