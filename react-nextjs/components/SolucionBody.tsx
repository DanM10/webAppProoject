import {solucion} from "../interfaces";

export default function (props:solucion){
    return(
        <>
            <div className={"row"}>
                <div className={"col-4"}>
                    <span className={"fw-bold"}>Persona a cargo: </span>{props.personInCharge}
                </div>
                <div className={"col-8"}>
                    <span className={"fw-bold"}>Solucion: </span>{props.solution}
                </div>
            </div>
        </>
    )
}