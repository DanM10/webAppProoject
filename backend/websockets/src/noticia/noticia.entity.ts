import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ReporteEntity} from "../reporte/reporte.entity";

@Entity()
export class NoticiaEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        name:"descripcion",
        length:150,
        type:"varchar",
    })
    descripcion:string;

    @Column({
        name: "lugar",
        length:100,
        type:"varchar",
    })
    lugar: string;

    @Column({
        name:"fecha_noticia",
        type:"date",
    })
    fecha:Date;

    @ManyToOne(
        ()=> ReporteEntity,
        reporte => reporte.noticia,
        {
            onDelete: "SET NULL",
        }
    )
    reporteNoticia: ReporteEntity[];
}