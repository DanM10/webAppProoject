import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {NoticiaEntity} from "./noticia.entity";
import {NoticiaController} from "./noticia.controller";
import {NoticiaService} from "./noticia.service";

@Module({
    imports:[TypeOrmModule.forFeature([NoticiaEntity])],
    controllers: [NoticiaController],
    providers: [NoticiaService],
    exports: [NoticiaService],
})
export class NoticiaModule{}