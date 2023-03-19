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
import {NoticiaService} from "./noticia.service";
import {NoticiaCreateDto} from "./dto/noticia-create";
import {validate} from "class-validator";
import {NoticiaUpdateDto} from "./dto/noticia-update";

@Controller('noticia')
export class NoticiaController{
    constructor(private readonly _noticiaService: NoticiaService) {}

    @Get()
    @HttpCode(200)
    findAll(){
        return this._noticiaService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    findOneById(@Param('id',ParseIntPipe) id: number){
        return this._noticiaService.findOneById(id);
    }

    @Post()
    @HttpCode(201)
    async create(@Body() noticia: any){
        const newNoticia = new NoticiaCreateDto();
        newNoticia.descripcion = noticia.descripcion;
        newNoticia.lugar = noticia.lugar;
        newNoticia.fecha = noticia.fecha
        newNoticia.reporteNoticia = noticia.reporteNoticia;
        const errors = await validate(newNoticia);
        if(errors.length > 0){
            console.error(errors);
            throw new BadRequestException({
                mensaje: 'Datos incorrectos'
            })
        }
        return this._noticiaService.create(newNoticia);
    }

    @Put(':id')
    @HttpCode(200)
    async update(
        @Body() noticia: any,
        @Param('id', ParseIntPipe) id: number
    ){
        const modifiedNoticia = new NoticiaUpdateDto();
        modifiedNoticia.descripcion = noticia.descripcion;
        modifiedNoticia.lugar = noticia.lugar;
        modifiedNoticia.fecha = noticia.fecha
        const errors = await validate(modifiedNoticia);
        if( errors.length > 0){
            console.error(errors);
            throw new BadRequestException({
                mensaje: "Datos incorrectos"
            })
        }
        return this._noticiaService.update(id, modifiedNoticia);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number){
        return this._noticiaService.delete(id);
    }
}