import React from 'react'
import Footer from './footer'
import Home from './home'
import Navbar from './navbar'
import ProductList from './product/productList'
import LogoHome from "../components/images/logoHome.jpg"
import { Image} from 'react-bulma-components'

const Content=()=>{
return(
    <>
    <Navbar />
    
    <Image size={48} alt="48x48" src={LogoHome} position="left"/>
    <ProductList />
    <Footer />
    </>
)
}
export default Content