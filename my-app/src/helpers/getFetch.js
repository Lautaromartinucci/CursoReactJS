
let productos=[
{
    id:'1',
    nombre:'Camperon Over',
    desc:'Camperon Negro con capucha y piel desmontable y bolsillos',
    precio: '$10000',
    foto: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQSbzOGdTFH15aG5zvYOO6yVIybmIVkv-0t5OwFQWvDK7GTDje5j8b2zGtzIjRgSSlnYmJyPdoP_JFF&usqp=CAc',
    
},

{
    id:'2',
    nombre:'Camperon Redlord',
    desc:'Camperon Negro con capucha y piel desmontable y bolsillos',
    precio: '$15000',
    foto: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHSY2DPRz_H3wHehTORWRJRyo2s0hIcmsFxGHNVZ1aPXgyPKYg8ZMqk5UvaRvMSXEizcKd6Ibt44YX&usqp=CAc'
   
},

{
    id:'3',
    nombre:'Camperon Tumba',
    desc:'Camperon Negro con capucha y piel desmontable y bolsillos',
    precio: '$20000',
    foto: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRyY75xI3JxDVlEkCcWIowqPKfT63lrHPAK9Uf2sIWGreoJ94vihOKZnIINTKwymx_80W9slHGn-Xy4&usqp=CAc'
    
},


];

export const getFetchOne = (id) =>{    
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(prod => prod.id === id))              
            } else {
                resolve(productos)          
            }
        },2000)    
    })
}  

export const getFetch = () =>{    
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            resolve(productos)   
        },2000)    
    })
}  

