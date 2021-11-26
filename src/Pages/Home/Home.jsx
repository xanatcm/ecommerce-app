import React from 'react'


//Components
import Header from '../../MainLayout/Header/Header'
import ProductCard from '../../Components/ProductCard/ProductCard'


//Styles
import './Home.css'

const Home = () => {

    
    return (
        <>
            <Header />
            <div className="main-home">
                    
            <ProductCard />
                   
            </div>
        </>
    )
}

export default Home
