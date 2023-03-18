import {IsOptional, IsString} from "class-validator";

export class SolucionUpdateDto {
    @IsOptional()
    @IsString()
    personInCharge: string;

    @IsOptional()
    @IsString()
    solution: string
}