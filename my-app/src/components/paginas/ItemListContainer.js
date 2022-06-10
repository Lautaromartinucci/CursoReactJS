import React, { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/getFetch'




const ItemListContainer =() => {
  const [productos, setProductos] =useState ([])
  const [loading, setLoading] = useState(true)

  useEffect (() =>{
    getFetch()
    .then((resp)=> {
      setProductos(resp)
    })
    .catch(err => console.log(err))
    .finally(()=> console.log())
  }, [])

  console.log(productos)

  return (
    <div>
      {productos.map(producto=> <li key={producto.id}> {producto.nombre}</li> ) }
    </div>
  )
}

export default ItemListContainer