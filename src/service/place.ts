import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from 'src/entity/place';
import { Repository } from 'typeorm';
import { IPlaceCreateParams, IPlaceParams } from 'src/interface/place';

@Injectable()
export class PlaceService {
    constructor(@InjectRepository(Place) private placeRepository: Repository<Place>) { }

    async findAll(): Promise<Place[]> {
        return await this.placeRepository.find();
    }
    async findById(id: number): Promise<Place | null> {
        return await this.placeRepository.findOne({ where: { id } });
    }

    async create(p: IPlaceCreateParams): Promise<Place> {
        return await this.placeRepository.save(p);
    }

    async update(id: number, p: IPlaceParams): Promise<boolean> {
        const foundPlace = await this.placeRepository.findOne({ where: { id } });
        if (!foundPlace) {
            return false;
        }
        return (await this.placeRepository.save({ ...foundPlace, ...p })) ? true : false;
    }

    async remove(id: number): Promise<boolean> {
        const foundPost = await this.placeRepository.findOne({ where: { id } });
        if (!foundPost) {
            return false;
        }
        return (await this.placeRepository.delete(id)) ? true : false;
    }
}
