import {GetStaticPaths, GetStaticProps} from "next";
import {getHttp, reportHttp} from "../../services/user.http";
import {report2, solucionArreglo, users} from "../../interfaces";
import Capsula from "../../components/capsula";
import {Accordion, Card} from "react-bootstrap";
import {useEffect, useState} from "react";
import CustomToggle from "../../components/CustomToggle";
import SolucionBody from "../../components/SolucionBody";



interface parametrosUser{
    error?:string;
    users?:users
}

export default function (params:parametrosUser){
        const usuario = params.users
        const [reportesSinSolucion,setReportesSinSolucion] = useState(params.users.reports)
        const [arregloSoluciones,setArregloSoluciones] = useState(solucionArreglo)

    useEffect(
        ()=>{
            consultarSoluciones()
        },[]
    )

    const consultarSoluciones = async () => {
            reportesSinSolucion.map(async (value, index, array)=>{
                const valor = await reportHttp(value.id.toString()) as report2
                //setArreglo(prevState => [...prevState,valor])
            })

        }



    return(
        <>
            <Capsula usuario={usuario}>
                <div className={"container text-center"}>
                    <div className={"row justify-content-md-center mt-2"}>
                        <h3>Reportes</h3>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto my-3">
                            <Accordion >
                                {reportesSinSolucion.map(
                                    (val,index)=>{
                                        return (
                                            <Card>
                                            <Card.Header>
                                            <CustomToggle
                                                eventKey={index.toString()}
                                                priority={val.priority}
                                                actualState={val.actualState}
                                                descripcion={val.descripcion}
                                                date={val.date}
                                                parroquia={val.parroquia}
                                            >↓</CustomToggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={index.toString()}>
                                            <Card.Body><SolucionBody
                                                id={arregloSoluciones[index].id}
                                                personInCharge={arregloSoluciones[index].personInCharge}
                                                solution={arregloSoluciones[index].solution}
                                            ></SolucionBody></Card.Body>
                                            </Accordion.Collapse>
                                            </Card>
                                            )
                                        }
                                    )
                                }
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