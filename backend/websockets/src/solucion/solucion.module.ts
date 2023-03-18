import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SolucionEntity} from "./solucion.entity";
import {SolucionController} from "./solucion.controller";
import {SolucionService} from "./solucion.service";

@Module({
    imports: [TypeOrmModule.forFeature([SolucionEntity])],
    controllers: [SolucionController],
    providers: [SolucionService],
    exports: [SolucionService],
})
export class SolucionModule{}