import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class SolucionCreateDto {
    @IsNotEmpty()
    @IsString()
    personInCharge: string;

    @IsNotEmpty()
    @IsString()
    solution: string

    @IsNotEmpty()
    @IsNumber()
    report: number;
}