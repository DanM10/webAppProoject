import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ReporteEntity} from "../reporte/reporte.entity";

@Entity()
export class SolucionEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        name: "encargado",
        type: "varchar",
        length: 50,
    })
    personInCharge: string;

    @Column({
        name: "solucion",
        type: 'varchar',
        length: 50,
    })
    solution: string;

    @OneToOne(
        () => ReporteEntity,
        reporte => reporte.solution,
        {
            onDelete: "SET NULL",
        }
    )
    @JoinColumn({
        name:"reporte_id",
    })
    report: ReporteEntity;
}