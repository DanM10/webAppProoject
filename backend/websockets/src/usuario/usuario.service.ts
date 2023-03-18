import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Repository} from "typeorm";
import {UsuarioCreateDto} from "./dto/usuario-create";
import {UsuarioUpdateDto} from "./dto/usuario-update";

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>,
    ) {}

    findAll(): Promise<UsuarioEntity[]>{
        return this._usuarioRepository.find({
            relations: ['reports']
        });
    }
    findOneById(id: number): Promise<UsuarioEntity>{
        return this._usuarioRepository.findOne({
            where: {
                id: id
            },
            relations: ['reports']
        });
    }

    delete(id: number): any{
        return this._usuarioRepository.delete(id);
    }

    create(usuario: UsuarioCreateDto): Promise<UsuarioEntity>{
        return this._usuarioRepository.save(usuario);
    }

    update(id: number, usuario: UsuarioUpdateDto): Promise<UsuarioEntity>{
        return this._usuarioRepository.save({
            ...usuario, id
        });
    }
}