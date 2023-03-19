import {IsDateString, IsOptional, IsString} from "class-validator";

export class NoticiaUpdateDto{
    @IsOptional()
    @IsString()
    descripcion: string;

    @IsOptional()
    @IsString()
    lugar: string;

    @IsOptional()
    @IsDateString()
    fecha: string;

}