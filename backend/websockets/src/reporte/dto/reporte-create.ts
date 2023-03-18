import {IsDateString, IsNotEmpty, IsNumber, IsString} from "class-validator";

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

}