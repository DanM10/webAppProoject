import {IsDate, IsOptional, IsString} from "class-validator";

export class ReporteUpdateDto {
    @IsOptional()
    @IsString()
    parroquia: string;

    @IsOptional()
    @IsString()
    descripcion: string;

    @IsOptional()
    @IsString()
    actualState: string;

    @IsOptional()
    @IsDate()
    date: Date;

    @IsOptional()
    @IsString()
    priority: string;

}