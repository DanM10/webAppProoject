import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReporteEntity} from "./reporte.entity";
import {ReporteController} from "./reporte.controller";
import {ReporteService} from "./reporte.service";

@Module({
    imports:[TypeOrmModule.forFeature([ReporteEntity])],
    controllers: [ReporteController],
    providers: [ReporteService],
    exports: [ReporteService],
})
export class ReporteModule{}