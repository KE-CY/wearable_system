import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Response } from '@nestjs/common';
import { PlaceService } from 'src/service/place';
import { PlaceDTO } from 'src/dto/place';

@Controller('place')
export class PlaceController {
    constructor(private readonly placeService: PlaceService) { }

    @Get()
    async getAll(@Response() res) {
        const data = await this.placeService.findAll();
        res.status(HttpStatus.OK).json(data)
    }

    @Post()
    async create(@Body() createPlaceDTO: PlaceDTO, @Response() res) {
        try {
            await this.placeService.create(createPlaceDTO);
            res.status(HttpStatus.OK).json({ status: 'success' });
        } catch (error) {
            console.error(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put()
    async update(@Response() res, @Param('id') id: number, @Body() placeDTO: PlaceDTO) {
        try {
            const isUpdate = await this.placeService.update(id, placeDTO)
            res.status(HttpStatus.OK).json({ status: isUpdate ? 'success' : 'fail' });
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('/:id')
    async delete(@Response() res, @Param('id') id: number) {
        try {
            const isDelete = await this.placeService.remove(id);
            res.status(HttpStatus.OK).json({ status: isDelete ? 'success' : 'fail' });
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
