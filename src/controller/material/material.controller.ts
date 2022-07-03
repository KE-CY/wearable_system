import { Body, Controller, HttpStatus, Post, Response } from '@nestjs/common';
import { MaterialDTO } from 'src/dto/material';
import { MaterialService } from 'src/service/material';
import { PlaceService } from 'src/service/place';
import { UserService } from 'src/service/user';

@Controller('material')
export class MaterialController {
    constructor(
        private readonly materialService: MaterialService,
        private readonly userService: UserService,
        private readonly placeService: PlaceService) { }

    @Post()
    async create(@Body() createMaterialDTO: MaterialDTO, @Response() res) {
        try {
            const foundUser = await this.userService.findById(createMaterialDTO.userId);
            if (!foundUser) {
                res.status(HttpStatus.NOT_FOUND).json({ msg: 'user not found.' });
            }
            const foundPlace = await this.placeService.findById(createMaterialDTO.placeId);
            if (!foundPlace) {
                res.status(HttpStatus.NOT_FOUND).json({ msg: 'place not found.' });
            }
            const isCreate = await this.materialService.create(createMaterialDTO);
            res.status(HttpStatus.OK).json({ status: isCreate ? 'success' : 'fail' });
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
