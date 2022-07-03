import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from 'src/entity/material';
import { MaterialService } from 'src/service/material';
import { MaterialController } from 'src/controller/material/material.controller';
import { UserModule } from './user.module';
import { PlaceModule } from './place.module';

@Module({
    imports: [TypeOrmModule.forFeature([Material]), UserModule, PlaceModule],
    providers: [MaterialService],
    controllers: [MaterialController],
    exports: [MaterialService],
})
export class MaterialModule { }
