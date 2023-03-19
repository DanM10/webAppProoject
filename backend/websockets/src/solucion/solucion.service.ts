import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {SolucionEntity} from "./solucion.entity";
import {Repository} from "typeorm";
import {SolucionCreateDto} from "./dto/solucion-create";
import {SolucionUpdateDto} from "./dto/solucion-update";

@Injectable()
export class SolucionService{
    constructor(
        @InjectRepository(SolucionEntity)
        private readonly _solucionRepository: Repository<SolucionEntity>,
    ) {}

    findAll(): Promise<SolucionEntity[]>{
        return this._solucionRepository.find({
            relations: ['report']
        });
    }
    findOneById(id: number): Promise<SolucionEntity>{
        return this._solucionRepository.findOne({
            where: {
                id: id
            },
        });
    }

    delete(id: number): any{
        return this._solucionRepository.delete(id);
    }

    create(solucion: any): Promise<SolucionEntity>{
        return this._solucionRepository.save(solucion);
    }

    update(id: number, solucion: SolucionUpdateDto): Promise<SolucionEntity>{
        return this._solucionRepository.save({
            ...solucion, id
        });
    }
}