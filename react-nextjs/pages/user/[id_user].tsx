import {GetStaticPaths, GetStaticProps} from "next";
import {getHttp, reportHttp} from "../../services/user.http";
import {report, report2, User, users} from "../../interfaces";
import Capsula from "../../components/capsula";
import {Accordion, Button, Card, useAccordionButton} from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import {ReactNode, useEffect, useState} from "react";
import CustomToggle from "../../components/CustomToggle";



interface parametrosUser{
    error?:string;
    users?:users
}

export default function (params:parametrosUser){
        const usuario = params.users
        const reportesSinSolucion = params.users.reports
        const [arregloReportes,setArreglo] = useState([] as report2[])

    useEffect(
        ()=>{
            consultarSoluciones()

        },[]
    )

    const consultarSoluciones = async () => {
            reportesSinSolucion.map(async (value, index, array)=>{
                const valor = await reportHttp(value.id.toString()) as report2
                setArreglo(prevState => [...prevState,valor])
                
            })

        }



    return(
        <>
            {console.log(arregloReportes.length)}
            <Capsula usuario={usuario}>
                <div className={"container text-center"}>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto my-3">
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey="0">↓</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey="1">Click me!</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </Capsula>
        </>
    )
}


export const getStaticProps:GetStaticProps =async (
    {params}
) => {
    try {
        //fetch
        const id = params.id_user as String
        const resultado = await getHttp('usuario',id)
        return {props:{users:resultado}}
    }catch (err:any){
        return  {props:{errors:err.message}}
    }
}

export const getStaticPaths:GetStaticPaths = async (
) =>{
    //consultar ids validos
    const paths = []
    const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    lista.map(
        (soID) =>{
            paths.push({params:{id_user:soID.toString()}})
        })
    return {paths,fallback:false}
}