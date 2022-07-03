import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MaterialDTO } from 'src/dto/material';
import { Material } from 'src/entity/material';
import { Repository } from 'typeorm';

@Injectable()
export class MaterialService {
    constructor(@InjectRepository(Material) private materialRepository: Repository<Material>) { }

    async findAll(): Promise<Material[]> {
        return await this.materialRepository.find();
    }

    async findById(id: number): Promise<Material | null> {
        return await this.materialRepository.findOne({ where: { id } });
    }

    async create(m: MaterialDTO): Promise<boolean> {
        const material = new Material();
        Object.assign(material, m);
        return (await this.materialRepository.save(material)) ? true : false;
    }

}
