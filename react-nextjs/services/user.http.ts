import { users} from "../interfaces";

export async function getHttp(
    entidad:String,
    id?:String)
    :Promise<users[]>{

    const url = `http://localhost:3030/usuario${id ? '/' + id :''}`;
    const respuesta = await fetch(url)
    console.log(respuesta)
    return (await respuesta.json()) as users[]
}