import React from 'react'
import ContextApi from '../context/contextApi'
import Navbar from './navbar'
import ProductList from './product/productList'
import LogoHome from '../components/images/logoHome.jpg'
import { Image } from 'react-bulma-components'
import About from './about'
import FooterComponent from './footer'

const Content = () => {
  return (
        <ContextApi.Consumer>
         {context => (
        <>
        <Navbar />
        <Image size={128} alt='48x48' src={LogoHome} position='left' />
        {context.login ? <ProductList />: <About/>}
        <FooterComponent />
        </>
      )}
    </ContextApi.Consumer>
  )
}
export default Content
