import {React, useState,useEffect} from 'react'
import Product from './product'
import { getProducts }from '../../utils/index'
import Loading from '../loading/Loading'

const ProductList = ()=>{
    const [product, setProduct] = useState([])
  const [isLoading, setLoading] = useState(true)

  async function loadProduct(){
    const response = await getProducts()
    if (response && response.status===201)
    setProduct(response.data.product)
    else{
      setLoading(true)
    }
  }
 // setLoading(false)

    useEffect(()=>{
      loadProduct()
    }, [])

    return(
        <> {!isLoading && <Loading />}
      {!product.length && (
        <>
        <h1 className='title has-text-centered'>'Lista de productos vacia'</h1>
        <Loading />
        </>)}
      {!isLoading && product.length && <ProductList product={product} />}
      <Product product={product} />
        </>
            
        
    )
}

export default ProductList
