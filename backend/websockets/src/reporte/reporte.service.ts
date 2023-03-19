import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ReporteEntity} from "./reporte.entity";
import {Repository} from "typeorm";
import {ReporteUpdateDto} from "./dto/reporte-update";

@Injectable()
export class ReporteService{
    constructor(
        @InjectRepository(ReporteEntity)
        private readonly _reporteRepository: Repository<ReporteEntity>,
    ) {}

    findAll(): Promise<ReporteEntity[]>{
        return this._reporteRepository.find({
            relations: ['solution','user','noticia']
        });
    }
    findOneById(id: number): Promise<ReporteEntity>{
        return this._reporteRepository.findOne({
            where: {
                id: id
            },
            relations: ['solution','user','noticia']
        });
    }

    delete(id: number): any{
        return this._reporteRepository.delete(id);
    }

    create(reporte: any): Promise<ReporteEntity>{
        return this._reporteRepository.save(reporte);
    }

    update(id: number, reporte: ReporteUpdateDto): Promise<ReporteEntity>{
        return this._reporteRepository.save({
            ...reporte, id
        });
    }
}