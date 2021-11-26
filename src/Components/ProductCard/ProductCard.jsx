import React, {useContext} from 'react'

//Context
import StoreContext from '../../Context/StoreContext/StoreContex'

//Styles
import './ProductCard.css'

const ProductCard = () => {

    const { state, dispatch } = useContext(StoreContext)

    //Functions
    const handleAddToCart = (id, price) => {
        dispatch({type: "ADD_TO_CART", payload: {productId: id, productPrice: price}})
    }
    
    return (
        <>
            {
                state?.list?.map(item => (
                    <div className="main-card" key={item.id}>  
                        <img src={item.img} alt="imagen" />
                        <p className="prod-name">{item.product}</p>
                        <p className="price">${item.price}.00 </p>
                        <p className="description">{item.description}</p>
                        <button className="btn-add" 
                            onClick={() => handleAddToCart(item.id, item.price)}>
                            Add to cart
                        </button>
                        
                        
                    </div>
                ))}
        </>
    )
}

export default ProductCard
