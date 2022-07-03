import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user';
import { IUserCreateParams } from 'src/interface/user';
import { encrypt } from 'src/utils/md5';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async create(u: IUserCreateParams): Promise<User> {
        u.password = encrypt(u.password)
        return await this.userRepository.save(u);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({ relations: ["materials"] });
    }

    async findById(id: number): Promise<User | null> {
        return await this.userRepository.findOne({ where: { id }, relations: ["materials"] });
    }

    async findByName(name: string): Promise<User | null> {
        return await this.userRepository.findOne({ where: { name }, relations: ["materials"] });
    }

    async login(u: IUserCreateParams): Promise<boolean> {
        u.password = encrypt(u.password)
        const userlogin = await this.userRepository.find({ where: u });
        return userlogin ? true : false;
    }
}
