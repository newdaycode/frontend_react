import { useState, useEffect} from 'react'
import { getProductos, saveProductos } from '../services/productos'

export const useProducts = () => {

	const [productos, setproductos] = useState([]);
	const [isLoading, setIsLoading] =useState(true);
	const [visible, setvisible] =useState(false);

    async function loadProductos(){

        const response = await getProductos()
       
        console.log(response)

        if (response.status === 200) {
                setproductos(response.data.content);
            }
        

        setIsLoading(false)
        
    }    
	useEffect(() => {
        setIsLoading(true)
        loadProductos()
	}, []);

    const handleSubmit = async (data) => {
        await saveProductos(data)
        await loadProductos()
        setvisible(false)
    }

    return {
        productos, 
        isLoading, 
        visible, 
        setvisible, 
        handleSubmit, 
        loadProductos
    }

}

// export const useForm = (handleSubmit) => {
//     const [productos, setproductos] = useState({
//         nit: '',
//         name: '',
//         contact: '',
//         address: '',
//         email: '',
//         phone: '',
//         mobile:'',
//         website: ''
//     })

//     const cambioValor = (e) =>{

// 		setproductos({
//             ...productos,
//             [e.target.name]:e.target.value
//         })
// 	}

//     const {name, contact, address, email, phone, mobile, website, nit} = productos

//     const _handleSubmit = (e) =>{

//         e.preventDefault()
//         //validamos los datos
//         if (name=== '' || contact=== '' || address === '' || email === '' || phone === '' || website === '' || nit === '' || mobile === '') {
//             alert('Todos los campos son obligatorios')
//             return
//         }

//         handleSubmit(productos)
//     }


//     return {
//         _handleSubmit,
//         cambioValor
//     }
// }

