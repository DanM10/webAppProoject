import {IsDateString, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class NoticiaCreateDto{
    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsString()
    lugar: string;

    @IsNotEmpty()
    @IsDateString()
    fecha: string;

    @IsNotEmpty()
    @IsNumber()
    reporteNoticia: number;
}