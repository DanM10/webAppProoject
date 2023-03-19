import {Button, useAccordionButton} from "react-bootstrap";
import {ReactNode} from "react";
import {AiFillClockCircle} from "react-icons/ai";
import {FcLowPriority,FcMediumPriority,FcHighPriority} from "react-icons/fc";

import {report} from "../interfaces";
import {string} from "prop-types";
import {GrInProgress} from "react-icons/gr";
import {BsCheckLg} from "react-icons/bs";
import {MdNotInterested} from "react-icons/md";

interface CustomToggleProps {
    children: React.ReactNode;
    eventKey: string;
    parroquia:String;
    descripcion:String;
    actualState:String;
    date:String;
    priority:String
}

export default function ({ children, eventKey,priority,descripcion,date
,actualState,parroquia}: CustomToggleProps) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!')
    );

    const prioridad = (priority:String)=>{
        switch (priority) {
            case ("A"):{
                return (<FcHighPriority size={"2.5em"}/>)
            }
            case ("M"):{
                return <FcMediumPriority size={"2.5em"}/>
            }

            case ("B"):{
                return <BsCheckLg size={"2.5em"}/>
            }
        }
    }

    const estado = (estado:String)=>{
        switch (estado) {
            case ("N"):{
                return <MdNotInterested size={"2.5em"} color={'red'}/>
            }
            case ("P"):{
                return <GrInProgress size={"2.5em"} color={'yellow'}/>
            }
            case ("T"):{
                return <AiFillClockCircle size={"2.5em"} color={'green'}/>
            }
        }
    }


    return (
        <div className={"row px-2"}>
            <div className={"col-6"}>
                <div className={"row"}>
                    <div className={"col"}>Fecha: {date}</div>
                    <div className={"col"}>Parroquia: {parroquia}</div>
                    <div className={"col"}>Descripcion: {descripcion}</div>
                </div>
            </div>
            <div className={"col-2"}><span>Prioridad: {prioridad(priority)}</span></div>
            <div className={"col-2"}>Estado: {estado(actualState)}</div>
            <div className={"col-2"}>
                <Button
                    variant={"dark"}
                    onClick={decoratedOnClick}
                >
                    {children}
                </Button>
            </div>
        </div>
    );
}