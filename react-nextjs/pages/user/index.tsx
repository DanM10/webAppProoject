import Capsula from "../../components/capsula";
import {Button, Container} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {users} from "../../interfaces";

type form={
    id:string
}

export default function (){

    const {handleSubmit,register} = useForm<form>({defaultValues:{
        id:''
        }})

    const resultado = async (data:form) =>{
        window.open('user/'+data.id,"_self")
    }

    const usuarioNull:users = {email: "", id: 0, location: "", name: "", reports: []}

    return(
        <>
            <Capsula usuario={usuarioNull}>
                <Container>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto my-3">
                            <p>Login: </p>
                            <form onSubmit={handleSubmit(resultado)}>
                                <div className={'col-auto'}><label htmlFor={'id'} className={'form-label'}>
                                    Id</label></div>
                                <div className={'col-auto'}>
                                    <input type={'text'}
                                           className={' form-control'}
                                           id={'id'}
                                           {...register('id')}/>
                                </div>
                                <Button className={'my-2'} type={'submit'}>Enviar</Button>
                            </form>
                        </div>
                    </div>
                </Container>
            </Capsula>
        </>
    )
}