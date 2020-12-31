import {React, useState,useEffect} from 'react'
import Product from './product'
import { getProducts }from '../../utils/index'
import Loading from '../loading/Loading'

const ProductList = ()=>{
  const [product, setProduct] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [serch,setSerch] = useState("");

  async function loadProduct(){
    const response = await getProducts(serch)
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

    const handleChange = (e)=>{
      setSerch(e.target.value)
  }

    return(
      
      <> {!isLoading && <Loading />}
      {!product.length && (
        <>
        <h1 className='title has-text-centered'>'Lista de productos vacia'</h1>
        <Loading />
        </>)}
      {!isLoading && product.length && <></>}
        <> <form onChange={handleChange}>
          <input type="text" placeholder='Buscar'
          name='serch'
          value={serch}/>
        </form>
          
          <Product product={product}/>
          </> 
      </>
            
        
    )
}

export default ProductList
