import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    ParseIntPipe,
    Post,
    Put
} from "@nestjs/common";
import {SolucionService} from "./solucion.service";
import {SolucionCreateDto} from "./dto/solucion-create";
import {validate} from "class-validator";
import {SolucionUpdateDto} from "./dto/solucion-update";


@Controller('solucion')
export class SolucionController{
    constructor(private readonly _solucionService: SolucionService) {}

    @Get()
    @HttpCode(200)
    findAll(){
        return this._solucionService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    findOneById(@Param('id',ParseIntPipe) id: number){
        return this._solucionService.findOneById(id);
    }

    @Post()
    @HttpCode(201)
    async create(@Body() solucion: any){
        const newSolucion = new SolucionCreateDto();
        newSolucion.solution = solucion.solution;
        newSolucion.personInCharge = solucion.personInCharge;
        const errors = await validate(newSolucion);
        if(errors.length > 0){
            console.error(errors);
            throw new BadRequestException({
                mensaje: 'Datos incorrectos'
            })
        }
        return this._solucionService.create(newSolucion);
    }

    @Put(':id')
    @HttpCode(200)
    async update(
        @Body() solucion: any,
        @Param('id', ParseIntPipe) id: number
    ){
        const modifiedSolucion = new SolucionUpdateDto();
        modifiedSolucion.solution = solucion.solution;
        modifiedSolucion.personInCharge = solucion.personInCharge;
        const errors = await validate(modifiedSolucion);
        if( errors.length > 0){
            console.error(errors);
            throw new BadRequestException({
                mensaje: "Datos incorrectos"
            })
        }
        return this._solucionService.update(id, modifiedSolucion);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number){
        return this._solucionService.delete(id);
    }
}
