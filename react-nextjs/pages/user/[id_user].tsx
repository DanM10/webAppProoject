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
        const reportesSinSolucion = params.users.reports
        const [arregloSoluciones2,setArregloSoluciones2] = useState([] as report2[])

    useEffect(
        ()=>{
            consultarSoluciones()
        },[]
    )

    const consultarSoluciones = async () => {
            reportesSinSolucion.map(async (value, index)=>{
                const valor = await reportHttp(value.id.toString()) as report2
                setArregloSoluciones2(prevState => [...prevState,valor])
            })

        }

    console.log(arregloSoluciones2)


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
                                {arregloSoluciones2.map(
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
                                                id={val.solution.id}
                                                personInCharge={val.solution.personInCharge}
                                                solution={val.solution.solution}
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
    const lista = [1,2]
    lista.map(
        (soID) =>{
            paths.push({params:{id_user:soID.toString()}})
        })
    return {paths,fallback:false}
}