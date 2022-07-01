import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import { getFetch } from "../helpers/getFetch";
import { collection, getDoc, getFirestore} from 'firebase/firestore'

const ItemListContainer = () => {
    const [producto, setProducto] = useState([])
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true) 
    const { categoriaId } = useParams()

/*     useEffect(() => {

        const db = getFirestore ()
        const queryProductos = doc (db, 'productos', '2jIq5hSKljH5g9v5Qyyv')
        getDoc(queryProductos)
        .then(resp => setItem({ id: resp.id, ...resp.date()}))
    
    }, [bool]) */

    useEffect (() =>{
        const db = getFirestore ()
        const queryColletion = collection (db, 'productos')
        getDocs(queryColletion)
        .then ( data => setProductos (data.docs.map (productos =>({id: data.id, ...productos.data()}))))
        .catch (err => console.log (err))
        .finally (() =>setLoading(false))
    }, [])


    console.log(categoriaId)
   
    useEffect(()=>{
        if (categoriaId) {
            getFetch()
            .then((resp)=> {
                    setProductos(resp.filter(producto => producto.categoria === categoriaId ))
                    setLoading(false)
            })
            .catch(err => console.log(err))           
        } else {
            getFetch()
            .then( (resp)=> setProductos(resp) )
            .catch(err => console.log(err)) 
            .finally(()=> setLoading(false))           
        }
        
    }, [categoriaId])

   
   
    return (
        <div>
            { loading ? 
                <h1>Cargando...</h1>            
            :   
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                      <ItemList productos={productos} />              
                </div>             
            }
        </div>
    )
}

export default ItemListContainer
