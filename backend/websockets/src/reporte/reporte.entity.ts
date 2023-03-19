import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {SolucionEntity} from "../solucion/solucion.entity";
import {NoticiaEntity} from "../noticia/noticia.entity";

@Entity()
export class ReporteEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        name:"parroquia",
        length: 50,
        type: 'varchar',
        nullable: false,
    })
    parroquia: string;
    @Column({
        name:"descripcion",
        length: 150,
        type: 'varchar',
        nullable: false,
    })
    descripcion: string;
    @Column({
        name:"estado_actual",
        length: 1,
        type: 'varchar',
        nullable: false,
        default: 'N',
        comment:"N= No iniciado; P= En Progreso; T= Terminado"
    })
    actualState: string;
    @Column({
        name:"fecha",
        type: "date",
        nullable: false,
    })
    date: Date;
    @Column({
        name: "prioridad",
        type:'varchar',
        length: 1,
        nullable: false,
        default: "A",
        comment:"A = alta; M=media; B=baja"
    })
    priority: string;

    @ManyToOne(
        () => UsuarioEntity,
        usuario => usuario.reports,
        {
            onDelete: "SET NULL",
        }
    )
    @JoinColumn({
        name: "usuario_id",
    })
    user: UsuarioEntity;

    @OneToOne(
        () => SolucionEntity,
        solucion => solucion.report,
        {
            onDelete:"SET NULL",
        }
    )
    solution: SolucionEntity;

    @OneToMany(
        () => NoticiaEntity,
        noticia => noticia.reporteNoticia,
        {
            onDelete: "SET NULL"
        }
    )
    noticia: NoticiaEntity;
}