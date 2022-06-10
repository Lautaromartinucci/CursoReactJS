let productos=[
{
    id:'1',
    nombre:'Buzo Over',
    descripcion:'TALLE L',
    stock:5,
},

{
    id:'2',
    nombre:'Remeron Tumba',
    descripcion:'TALLE XL',
    stock:5,
},

{
    id:'3',
    nombre:'Camperon River',
    descripcion:'XXL',
    stock:5,
}
];

export const getFetch = () => {

    return new Promise( (resolve, reject)=>{
        setTimeout (()=>{
        resolve(productos)
        }, 3000)
    })
}