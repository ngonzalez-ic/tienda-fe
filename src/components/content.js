import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import ProductList from './product/productList'
import LogoHome from '../components/images/logoHome.jpg'
import { Image } from 'react-bulma-components'

const Content = () => {
  return (
    <div style={{}}>
      <Navbar />

      <Image size={128} alt='48x48' src={LogoHome} position='left' />

      <ProductList />

      <Footer />
    </div>
  )
}
export default Content
