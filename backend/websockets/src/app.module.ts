import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {ReporteEntity} from "./reporte/reporte.entity";
import {SolucionEntity} from "./solucion/solucion.entity";
import {SolucionModule} from "./solucion/solucion.module";
import {UsuarioModule} from "./usuario/usuario.module";
import {ReporteModule} from "./reporte/reporte.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'sqlite',
          database:'bdd/proyecto.sqlite',
          entities: [SolucionEntity, UsuarioEntity, ReporteEntity],
          synchronize: true,
          dropSchema: false,
      }),
      SolucionModule,
      UsuarioModule,
      ReporteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
