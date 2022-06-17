import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <div            
            className='col-md-4 p-1'                                                           
        >                    
            <div className="card w-100 mt-5 border-dark" >
                <div className="card-header text-white bg-dark border-dark">
                    {`${prod.nombre}`}
                </div>
                <div className="card-body border-dark">
                    <img src={prod.foto} alt='' className='w-50' />
                    {prod.stock}                                                            
                </div>
                <div className="card-footer text-white bg-dark border-dark"> 
                    <Link to={`/camperones/${prod.id}`} >
                        <button className="btn btn-light text-white bg-dark  btn-block">
                            Ver más
                        </button>   
                    </Link> 
                </div>
            </div>                                                                                                                            
        </div>
    )
}

export default Item
