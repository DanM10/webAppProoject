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
import {UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./dto/usuario-create";
import {validate} from "class-validator";
import {UsuarioUpdateDto} from "./dto/usuario-update";

@Controller('usuario')
export class UsuarioController{
    constructor(private readonly _usuarioService: UsuarioService) {}

    @Get()
    @HttpCode(200)
    findAll(){
        return this._usuarioService.findAll();
    }

    @Get(':id')
    @HttpCode(200)
    findOneById(@Param('id',ParseIntPipe) id: number){
        return this._usuarioService.findOneById(id);
    }

    @Post()
    @HttpCode(201)
    async create(@Body() usuario: any){
        const newUsuario = new UsuarioCreateDto();
        newUsuario.name = usuario.name;
        newUsuario.location = usuario.location;
        newUsuario.email = usuario.email;
        const errors = await validate(newUsuario);
        if(errors.length > 0){
            console.error(errors);
            throw new BadRequestException({
                mensaje: 'Datos incorrectos'
            })
        }
        return this._usuarioService.create(newUsuario);
    }

    @Put(':id')
    @HttpCode(200)
    async update(
        @Body() usuario: any,
        @Param('id', ParseIntPipe) id: number
    ){
        const modifiedUsuario = new UsuarioUpdateDto();
        modifiedUsuario.name = usuario.name;
        modifiedUsuario.location = usuario.location;
        modifiedUsuario.email = usuario.email;
        const errors = await validate(modifiedUsuario);
        if( errors.length > 0){
            console.error(errors);
            throw new BadRequestException({
                mensaje: "Datos incorrectos"
            })
        }
        return this._usuarioService.update(id, modifiedUsuario);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number){
        return this._usuarioService.delete(id);
    }
}
