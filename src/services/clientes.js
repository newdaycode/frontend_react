import axios from 'axios'
import Api from './api'



//Consultar Clientes
export async function getCliente (){
    try{
        const response = await axios({
            url:`${Api}/clients/list`,
            method: 'GET'
        })
        return response
    }catch (e){
        console.log(e)
    }

}


//Eliminar Clientes
export async function deleteCliente (id){
    try{
        const response = await axios({
            url:`${Api}/clients/${id}/delete`,
            method: 'DELETE'
        })
        return response
    }catch (e){
        console.log(e)
    }

}


//Registrar Clientes
export async function saveCliente (clientData){
    try{

        const response = await axios({
            url:`${Api}/clients/create`,
            method: 'POST',
            data: clientData
        })

        return response
    }catch (e){
        console.log(e)
    }

}


//actualizar clientes
export async function updateCliente (clientData){
    try{

        const response = await axios({
            url:`${Api}/clients/update`,
            method: 'PUT',
            data: clientData
        })

        return response
    }catch (e){
        console.log(e)
    }

}



