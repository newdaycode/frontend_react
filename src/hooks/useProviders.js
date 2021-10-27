import { useState, useEffect} from 'react'
import { getProvedores, saveProvedores } from '../services/provedores'

export const useProviders = () => {

	const [provedores, setprovedores] = useState([]);
	const [isLoading, setIsLoading] =useState(true);
	const [visible, setvisible] =useState(false);

    async function loadProvedores(){

        const response = await getProvedores()
       
        if (response.status === 200) {
                setprovedores(response.data.content);
            }
        

        setIsLoading(false)
        
    }    
	useEffect(() => {
        setIsLoading(true)
        loadProvedores()
	}, []);

    const handleSubmit = async (data) => {
        await saveProvedores(data)
        await loadProvedores()
        setvisible(false)
    }

    return {
        provedores, 
        isLoading, 
        visible, 
        setvisible, 
        handleSubmit, 
        loadProvedores
    }

}

export const useForm = (handleSubmit) => {
    const [provedores, setprovedores] = useState({
        nit: '',
        name: '',
        contact: '',
        address: '',
        email: '',
        phone: '',
        mobile:'',
        website: ''
    })

    const cambioValor = (e) =>{

		setprovedores({
            ...provedores,
            [e.target.name]:e.target.value
        })
	}

    const {name, contact, address, email, phone, mobile, website, nit} = provedores

    const _handleSubmit = (e) =>{

        e.preventDefault()
        //validamos los datos
        if (name=== '' || contact=== '' || address === '' || email === '' || phone === '' || website === '' || nit === '' || mobile === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        handleSubmit(provedores)
    }


    return {
        _handleSubmit,
        cambioValor
    }
}

