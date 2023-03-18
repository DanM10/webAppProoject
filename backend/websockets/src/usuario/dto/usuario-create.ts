import {IsNotEmpty, IsString} from "class-validator";

export class UsuarioCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    email: string;
}