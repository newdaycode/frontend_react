import axios from 'axios'
import Api from './api'



//Consultar Provedores
export async function getProvedores (){
    try{
        const response = await axios({
            url:`${Api}/provider/list`,
            method: 'GET'
        })
        return response
    }catch (e){
        console.log(e)
    }

}


//Eliminar Provedores
export async function deleteProvedor (id){
    try{
        const response = await axios({
            url:`${Api}/provider/${id}/delete`,
            method: 'DELETE'
        })
        return response
    }catch (e){
        console.log(e)
    }

}


//Registrar Provedores
export async function saveProvedores (provedorData){

    try{

        const response = await axios({
            url:`${Api}/provider/create`,
            method: 'POST',
            data: provedorData
        })

        return response
    }catch (e){
        console.log(e)
    }

}


//actualizar provedor
export async function updateProvedor (ProvedorData){
    try{

        const response = await axios({
            url:`${Api}/provider/update`,
            method: 'PUT',
            data: ProvedorData
        })

        return response
    }catch (e){
        console.log(e)
    }

}



