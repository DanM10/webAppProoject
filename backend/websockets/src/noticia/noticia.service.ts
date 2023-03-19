import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {NoticiaEntity} from "./noticia.entity";
import {Repository} from "typeorm";
import {NoticiaUpdateDto} from "./dto/noticia-update";

@Injectable()
export class NoticiaService{
    constructor(
        @InjectRepository(NoticiaEntity)
        private readonly _noticiaRepository: Repository<NoticiaEntity>,
    ) {}

    findAll(): Promise<NoticiaEntity[]>{
        return this._noticiaRepository.find({
            relations: ['reporteNoticia']
        });
    }
    findOneById(id: number): Promise<NoticiaEntity>{
        return this._noticiaRepository.findOne({
            where: {
                id: id
            },
            relations: ['reporteNoticia']
        });
    }

    delete(id: number): any{
        return this._noticiaRepository.delete(id);
    }

    create(noticia: any): Promise<NoticiaEntity>{
        return this._noticiaRepository.save(noticia);
    }

    update(id: number, noticia: NoticiaUpdateDto): Promise<NoticiaEntity>{
        return this._noticiaRepository.save({
            ...noticia, id
        });
    }
}