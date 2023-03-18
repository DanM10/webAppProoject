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
import {ReporteService} from "./reporte.service";
import {ReporteCreateDto} from "./dto/reporte-create";
import {validate} from "class-validator";
import {ReporteUpdateDto} from "./dto/reporte-update";

@Controller('reporte')
export class ReporteController{
    constructor(private readonly _reporteService: ReporteService) {}

    @Get()
    @HttpCode(200)
    findAll(){
        return this._reporteService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    findOneById(@Param('id',ParseIntPipe) id: number){
        return this._reporteService.findOneById(id);
    }

    @Post()
    @HttpCode(201)
    async create(@Body() reporte: any){
        const newReporte = new ReporteCreateDto();
        newReporte.parroquia = reporte.parroquia;
        newReporte.descripcion = reporte.descripcion;
        newReporte.actualState = reporte.actualState;
        newReporte.date = reporte.date;
        newReporte.priority = reporte.priority;
        newReporte.user = reporte.user;
        const errors = await validate(newReporte);
        if(errors.length > 0){
            console.error(errors);
            throw new BadRequestException({
                mensaje: 'Datos incorrectos'
            })
        }
        return this._reporteService.create(newReporte);
    }

    @Put(':id')
    @HttpCode(200)
    async update(
        @Body() reporte: any,
        @Param('id', ParseIntPipe) id: number
    ){
        const modifiedReporte = new ReporteUpdateDto();
        modifiedReporte.parroquia = reporte.parroquia;
        modifiedReporte.descripcion = reporte.descripcion;
        modifiedReporte.actualState = reporte.actualState;
        modifiedReporte.date = reporte.date;
        modifiedReporte.priority = reporte.priority;
        const errors = await validate(modifiedReporte);
        if( errors.length > 0){
            console.error(errors);
            throw new BadRequestException({
                mensaje: "Datos incorrectos"
            })
        }
        return this._reporteService.update(id, modifiedReporte);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number){
        return this._reporteService.delete(id);
    }
}
