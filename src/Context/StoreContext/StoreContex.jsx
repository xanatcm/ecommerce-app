import React, {createContext, useReducer} from "react";

//Creamos el contexto
const StoreContext = createContext();

//Reducer

const initalState = {
    
    list : [
        {
            id: 1,
            img: "https://i.pinimg.com/564x/0f/60/ba/0f60bae2189210bd0776384f660d0427.jpg",
            alt: "Golden earrings",
            product: "Earrings",
            price: 150,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, sequi?",
        },
        {
            id: 2,
            img: "https://i.pinimg.com/564x/89/60/ed/8960ed42993e5799063c5d7fedab1621.jpg",
            alt: "Golden bracelet",
            product: "Bracelet",
            price: 200,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, sequi?",
        },
        {
            id: 3,
            img: "https://i.pinimg.com/564x/57/85/2c/57852cecb091aa2369b325638134bdd4.jpg",
            alt: "Necklace",
            product: "Necklace",
            price: 250,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, sequi?",
        },
        {
            id: 4,
            img: "https://i.pinimg.com/564x/6b/76/46/6b76460d0d631b3bb2a4263951e82b34.jpg",
            alt: "Happy faces ring",
            product: "Ring",
            price: 300,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, sequi?",
        },
    
        {
            id: 5,
            img: "https://i.pinimg.com/564x/79/85/e3/7985e3e2a7b5b042b178dfcdc82aee7d.jpg",
            alt: "Earrings",
            product: "Earrings",
            price: 130,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, sequi?",
        },
        
        {
            id: 6,
            img: "https://i.pinimg.com/564x/35/e4/70/35e4707d8010055c54f3e2dde58c13ad.jpg",
            alt: "Necklace",
            product: "Necklace",
            price: 500,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, sequi?",
        },
    
        {
            id: 7,
            img: "https://i.pinimg.com/564x/d8/f3/ef/d8f3ef079caacfaddee8c0215266a99c.jpg",
            alt: "Bracelet",
            product: "Bracelet",
            price: 400,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, sequi?",
        },
    
        {
            id: 8,
            img: "https://i.pinimg.com/564x/fe/df/9b/fedf9b07b9f9fe4b094a5cb96173c951.jpg",
            alt: "Ring",
            product: "Ring",
            price: 250,
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, sequi?",
        },
    
    ],
    cart: [],
    total: 0
};



const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":

        const newProduct = state.list.find(
            (product) => product.id === action.payload.productId
        );

        const repeatedProduct = state.cart.find(item => item.id === newProduct.id)

        return repeatedProduct ? 
            {
                ...state,
                cart: state.cart.map((item) => 
                item.id === newProduct.id ? 
                {...item, quantity: item.quantity + 1} : item),
                total: state.total + action.payload.productPrice
            } : 
            {
                ...state,
                cart: [...state.cart, {...newProduct, quantity: 1}],
                total: state.total + action.payload.productPrice
            }

        case "REMOVE_ONE_FROM_CART":
        
        const handleRemoveOne = state.cart.find(item => item.id === action.payload.itemId)


        return handleRemoveOne.quantity > 1 ?
        {
         ...state,
         cart: state.cart.map(item => item.id === action.payload.itemId ? {...item, quantity: item.quantity - 1 } : item),
         total: state.total - action.payload.itemPrice
        } :
        {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.itemId),
            total: state.total - action.payload.itemPrice
        };

        case "REMOVE_ITEM_FROM_CART":
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id),
            total: state.total - action.payload.price * action.payload.quantity
        }

        case "REMOVE_ALL_FROM_CART":
        return{
            ...state,
            cart: initalState.cart,
            total: initalState.total
        }
        default:
            return state;
    }
};

//Provider
const StoreProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initalState);

    const data = 
        {
           state,
           dispatch
        }
    
    return(
        <StoreContext.Provider value={data}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContext
export {StoreProvider};
