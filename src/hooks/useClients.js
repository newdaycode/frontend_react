import { useState, useEffect} from 'react'
import { saveCliente, getCliente } from '../services/clientes'
import swal from 'sweetalert'

export const useClients = () => {

	const [clientes, setClientes] = useState([]);
	const [isLoading, setIsLoading] =useState(true);
	const [visible, setvisible] =useState(false);

    async function loadClient(){

        const response = await getCliente()
        
        if (response.status === 200) {
            setClientes(response.data.content);
        }
        
        setIsLoading(false)
        
    }    
	useEffect(() => {
        setIsLoading(true)
        loadClient()
	}, []);

    const handleSubmit = async (data) => {
        await saveCliente(data)
        .then((dataResponse)=>{
            if (dataResponse.data.status) {
                swal(dataResponse.data.content, {
                    icon: dataResponse.data.icon,
                  });

                loadClient()
                setvisible(false)
            }
            
            swal(dataResponse.data.content, {
                icon: dataResponse.data.icon,
            });
                
        })
    }

    return {
        clientes, 
        isLoading, 
        visible, 
        setvisible, 
        handleSubmit, 
        loadClient
    }

}

export const useForm = (handleSubmit) => {
    // const idUni = new Date().getTime().toString()
    const [cliente, setcliente] = useState({
		dni: '',
		names: '',
		address: '',
		phone: '',
		mobile: '',
		email:''
    })

    const cambioValor = (e) =>{

		setcliente({
            ...cliente,
            [e.target.name]:e.target.value
        })
	}

    let {names, address, phone, mobile,email} = cliente

    const _handleSubmit = (e) =>{

        e.preventDefault()
        //validamos los datos
        if (names=== '' || address=== '' || phone === '' || mobile === '' || email === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        handleSubmit(cliente)
    }


    return {
        _handleSubmit,
        cambioValor
    }
}

