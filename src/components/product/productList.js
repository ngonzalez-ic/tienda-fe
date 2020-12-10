import {React, useState,useEffect} from 'react'
import Product from './product'
import { getProducts }from '../../utils/index'
import Loading from '../loading/Loading'

const ProductList = ()=>{
    const [products, setProduct] = useState([])
  const [isLoading, setLoading] = useState(true)

  async function loadProduct(){
    const response = await getProducts()
    if (response.status===200)
    console.log('test')
    setProduct(response.data)
  }
 // setLoading(false)

    useEffect(()=>{
      loadProduct()
    }, [])

    console.log(products);
    return(
        <>
        {isLoading && <Loading />}
      {!products.length && (
        <h1 className='title has-text-centered'>'Lista de productos vacia'</h1>
      )}
      {!isLoading && products.length && <ProductList products={products} />}
      <Product products={products} />
        </>
            
        
    )
}

export default ProductList
