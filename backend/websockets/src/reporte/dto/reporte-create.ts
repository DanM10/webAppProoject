import {IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {SolucionEntity} from "../../solucion/solucion.entity";

export class ReporteCreateDto {
    @IsNotEmpty()
    @IsString()
    parroquia: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsString()
    actualState: string;

    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @IsNotEmpty()
    @IsString()
    priority: string;

    @IsNotEmpty()
    @IsNumber()
    user: number;

    @IsOptional()
    solution: SolucionEntity;
}