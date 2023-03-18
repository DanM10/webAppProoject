import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ReporteEntity} from "../reporte/reporte.entity";

@Entity()
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 50,
        type: 'varchar',
    })
    name: string;
    @Column({
        length:100,
        type: 'varchar',
    })
    location: string;
    @Column({
        length: 50,
        type: 'varchar',
    })
    email: string;
    @OneToMany(
        ()=> ReporteEntity,
        reporte => reporte.user,
        {
            onDelete: "SET NULL",
        }
    )
    reports: ReporteEntity[];
}