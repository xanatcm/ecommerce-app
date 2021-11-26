import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

//Context
import StoreContext from '../../Context/StoreContext/StoreContex'

//Styles
import './ShoppingCart.css'

//BoxIcons
import 'boxicons';

const ShoppingCart = () => {

    const {state, dispatch} = useContext(StoreContext)

    //Functions
    const handleAddToCart = (id, price) => {
        dispatch({type: "ADD_TO_CART", payload: {productId: id, productPrice: price}})
    }


    const handleRemoveOne = (id, price) => {
        dispatch({type: "REMOVE_ONE_FROM_CART", payload: {itemId: id, itemPrice: price} })
    }

    const handleRemoveItem = (id, price, quantity) => {
        dispatch({type: "REMOVE_ITEM_FROM_CART", payload: {id: id, price: price, quantity: quantity}})
    }

    return (

        <div>

            <a href="#cart-modal"><box-icon type='solid' name='cart'></box-icon></a>
            
            
            <div id="cart-modal" className="modal">
                <a href="#close" className="btn-close">Close</a>
                    { state.cart.length > 0 ? 
                    <p className="total">Total: ${state.total}.00 </p> : null
                    }
                    
                    { 
                        state?.cart?.map(item => (
                            
                            
                            <div className="modal-content" key={item.id}>
                                <img src={item.img} alt={item.alt} className="img-cart"></img>
                                <div>
                                    <p className="info-cart">{item.product}</p>
                                    <p className="info-cart">${item.price}.00</p>
                                    <button onClick={() => handleRemoveOne(item.id, item.price)}>-</button>
                                        <span className="cantidad">{item.quantity}</span>
                                    <button onClick={() => handleAddToCart(item.id, item.price)}>+</button>
                                    <p className="cantidad"> Item total: ${item.price*item.quantity}.00</p>
                                </div>
                                <button className="btn-delete" onClick={() => handleRemoveItem(item.id, item.price, item.quantity)}>
                                    <box-icon type='solid' name='trash'></box-icon>
                                </button>
                            </div>
                            
    
                        )) 
                    }

                {   
                    state.cart.length > 0 ? 
                    <button className="btn-out" onClick={() => dispatch({type:"REMOVE_ALL_FROM_CART"})}>Remove all</button> : null
                }
                {   
                    state.cart.length > 0 ? 
                    <Link to="/checkout"><button className="btn-out">Check out</button></Link> : null
                }
                
            </div>
        </div> 
    )
}

export default ShoppingCart
