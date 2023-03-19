import Capsula from "../components/capsula";
import {users} from "../interfaces";
import {Container} from "react-bootstrap";

const usuarioNull:users = {email: "", id: 0, location: "", name: "", reports: []}

export default function (){
    return(
        <>
            <Capsula usuario={usuarioNull}>
                <Container>

                </Container>
            </Capsula>
        </>
    )
}