import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

//Components
import Header from '../../MainLayout/Header/Header'

//Context
import StoreContext from '../../Context/StoreContext/StoreContex'

//Styles
import './CheckOut.css'

const CheckOut = () => {

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
        <>
        <Header />

        <h5>Resume:</h5>
        
        <div className="main">
            { 
                state?.cart?.map(item => (
                    
                    <div className="card-main" key={item.id}>
                        <img src={item.img} alt={item.alt} className="img-cart"></img>
                        <div className="single-product">
                            <p>{item.product}</p>
                            <p>${item.price}.00</p>
                            <button onClick={() => handleRemoveOne(item.id, item.price)}>-</button>
                                <span className="cantidad">{item.quantity}</span>
                            <button onClick={() => handleAddToCart(item.id, item.price)}>+</button>
                            <p className="cantidad"> Item total: ${item.price*item.quantity}.00</p>
                            
                        </div>
                        <button className="btn-trash" onClick={() => handleRemoveItem(item.id, item.price, item.quantity)}>
                            <box-icon type='solid' name='trash'></box-icon>
                        </button>
                    </div>
                    
                )) }

            <div className="form">

                <h5>Your info</h5>

                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Lastname"/>
                <input type="text" placeholder="Adress"/>
                <input type="number" placeholder="Card"/>
                <div className="numbers">
                    <input type="number" placeholder="MM/AA" className="small" />
                    <input type="number" placeholder="CCV" className="small" id="ma"/>
                </div>
            </div>
            <h4 className="total-out">Total: ${state.total}°° MXN</h4>
            <Link to="/confirm"><button className="btn-pay">Pay</button></Link>
                
        </div>
        </>
    )
}

export default CheckOut
