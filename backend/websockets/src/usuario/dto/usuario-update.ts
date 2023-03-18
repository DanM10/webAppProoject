import {IsOptional, IsString} from "class-validator";

export class UsuarioUpdateDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    location: string;

    @IsOptional()
    @IsString()
    email: string;
}