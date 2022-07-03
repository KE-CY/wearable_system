import { Controller, HttpStatus, Post, Body, Response } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/user';
import { UserService } from 'src/service/user';
import { AuthService } from 'src/service/auth';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) { }
    @Post()
    async create(@Body() createUserDTO: CreateUserDTO, @Response() res) {
        try {
            await this.userService.create(createUserDTO);
            res.status(HttpStatus.OK).json({ status: 'success' });
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('/login')
    async login(@Body() createUserDTO: CreateUserDTO, @Response() res) {
        try {
            const checkUser = await this.userService.login(createUserDTO);
            if (!checkUser) {
                res.status(HttpStatus.NOT_FOUND);
            }
            const token = await this.authService.createToken(createUserDTO.username)
            res.status(HttpStatus.OK).json(token);
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
