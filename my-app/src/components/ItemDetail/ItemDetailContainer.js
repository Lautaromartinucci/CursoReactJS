import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { collection, getDoc, getFirestore} from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()


    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        getDocs(queryCollection)
        .then(data=> setProductos(data.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    })
    console.log(productos)
    
    //todos filtados
/*         useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryCollectionFilter = query( queryCollection, where('precio', '>', 1000), limit(2), orderBy('precio', 'desc') )
        getDocs(queryCollectionFilter)
        .then(data=> setProductos(data.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }) */


    //uno   useEffect(() => {
/*         const db = getFirestore ()
        const queryProductos = doc (db, 'productos', '2jIq5hSKljH5g9v5Qyyv')
        getDocs(queryProductos)
        .then(resp => setItem({ id: resp.id, ...resp.date()}))
        .catch(err => console.log(err))
    }, [bool]) */

    return (
        <div className="border border-3 border-dark">
            <ItemDetail producto={producto} />
        </div>
    )

}
export default ItemDetailContainer
