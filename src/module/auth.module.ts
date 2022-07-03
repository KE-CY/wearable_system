import { Module, NestModule, MiddlewareConsumer, RequestMethod, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from 'src/entity/place';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user.module';
import { AuthService } from 'src/service/auth';
import { JwtStrategy } from 'src/service/jwtstrategy';
import * as passport from 'passport';

@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'iron-nest', // 生成token的key
            signOptions: {
                expiresIn: 60 * 60, // 有效时长
            }
        })],
    providers: [AuthService, JwtStrategy],
    controllers: [],
    exports: [AuthService],
})
export class AuthModule implements NestModule{ 
    public configure(consumber: MiddlewareConsumer) {
        consumber.apply(passport.authenticate('jwt', { session: false }))
            .forRoutes({ path: '/material', method: RequestMethod.ALL });
    }
}
