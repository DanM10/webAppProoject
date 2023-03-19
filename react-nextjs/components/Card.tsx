import {noticia} from "../interfaces";
import {Card} from "react-bootstrap";
import {AiFillLike} from "react-icons/ai";
import {useState} from "react";

type propsCard ={
    noticia:noticia
    imagen:string
}

export default function (props:propsCard){
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    return (
        <>
            <Card className={'mt-2'} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imagen} />
                <Card.Body>
                    <Card.Title>{props.noticia.fecha}</Card.Title>
                    <Card.Text>
                        <p><span className={"fw-bold"}>Descripcion: </span>{props.noticia.descripcion}</p>
                        <p><span className={"fw-bold"}>Lugar: </span>{props.noticia.lugar}</p>
                    </Card.Text>
                    <div className={"row justify-content-center"}>
                        <AiFillLike id={"like"}
                                    color={active ? "blue":"gray"}
                                    onClick={handleClick} size={"2.2em"}></AiFillLike>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}