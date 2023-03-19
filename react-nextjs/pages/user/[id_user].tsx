import {GetStaticPaths, GetStaticProps} from "next";
import {getHttp} from "../../services/user.http";
import {User, users} from "../../interfaces";
import Capsula from "../../components/capsula";


interface parametrosUser{
    error?:string;
    users?:users
}

export default function (params:parametrosUser){
        const usuario = params.users
    return(
        <>
            <Capsula usuario={usuario}>
                <>asdfsdf</>
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