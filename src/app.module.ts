import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceModule } from './module/place.module';
import { UserModule } from './module/user.module';
import { MaterialModule } from './module/material.module';
import { User } from 'src/entity/user';
import { Place } from 'src/entity/place';
import { Material } from 'src/entity/material';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'wearable_system',
      autoLoadEntities: true,
      entities: [User, Place, Material],
      synchronize: true,
    }),
    UserModule, PlaceModule, MaterialModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
