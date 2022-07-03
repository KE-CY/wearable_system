import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user';
import { UserService } from '../service/user';
import { UserController } from 'src/controller/user/user.controller';
import { AuthModule } from './auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]), AuthModule],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule { }
