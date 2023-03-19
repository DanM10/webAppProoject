import Capsula from "../components/capsula";
import {imagenes, noticia, users} from "../interfaces";
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {noticiaHttp} from "../services/user.http";
import Card from "../components/Card";

const usuarioNull:users = {email: "", id: 0, location: "", name: "", reports: []}

export default function (){

    const [noticias,setNoticias] = useState([] as noticia[])
    const imagenesarreglo = imagenes

    useEffect(
        ()=>{
            consultarNoticias()
        },[]
    )

    const consultarNoticias = async ()=>{
        const resultado = await noticiaHttp();
        setNoticias([
            ...noticias,
            ...resultado
        ])
    }




    return(
        <>
            <Capsula usuario={usuarioNull}>
                <Container>
                    {noticias.map(
                        (noticia,index)=>{
                            return(
                                <>
                                    <div className={"d-inline-flex px-2 pt-1"}>
                                        <Card noticia={noticia} imagen={imagenesarreglo[index].url}></Card>
                                </div>

                                </>
                            )
                        }
                    )}
                </Container>
            </Capsula>
        </>
    )
}