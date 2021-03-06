import {createContext, useState } from "react"



export const CartContext = createContext([])


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ([])
        const AddToCart = (productos, cant) => {
        if (IsInCart (productos.id)){
            alert ('El producto ya se encuentra en el carrito')
        }else {
            setCartList([...cartList, {productos, cant}])
            alert('Se agrego el producto')
        }

    };

    const DelProducto = (id) => {
        const productos = cartList.filter((item)=> item.productos.id !==id)
        setCartList(productos)
        return
    }

    const PrecioTotal = () => {
        let total = 0;

        cartList.forEach((newProduct) => {
            total +=
                parseInt(newProduct.productos.precio) * parseInt(newProduct.quantity);
        } );
        return parseInt (total);
    };

    const EmptyCart = () => {
        return setCartList([])
    };
  

    const IsInCart = (id) => {
        return cartList&&cartList.some((i)=> i.productos.id === id)
    };

  return (
    <CartContext.Provider value={{AddToCart, cartList, EmptyCart, DelProducto, PrecioTotal}}>
        {children}
    </CartContext.Provider>
  )
};

export default CartContextProvider