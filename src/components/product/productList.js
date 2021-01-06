import {React, useState,useEffect} from 'react'
import Product from './product'
import { getProducts }from '../../utils/index'
import Loading from '../loading/Loading'

const ProductList = ()=>{
  const [product, setProduct] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [search,setSearch] = useState("");

  async function loadProduct(){
    const response = await getProducts(search)
    if (response && response.status===201)
    setProduct(response.data.product)
    else{
      setLoading(true)
    }
  }
    useEffect(()=>{
      loadProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const handleChange = (e)=>{
      setSearch(e.target.value)
      e.preventDefault()
  }

    return(
      
      <> 
      
      {!isLoading && <Loading />}
      {!product.length && (
        <>
        <h1 className='title has-text-centered'>'Lista de productos vacia'</h1>
        <Loading />
        </>)}
      {isLoading && product.length && <> 
        <form onChange={handleChange} style={{display:'flex', justifyContent:'center'}}>
          <input type="text" placeholder='Buscar'
          name='search'
          value={search}
          style={{}}
          />
        </form>
        <Product product={product}/>
      </>}
   
      </>
            
        
    )
}

export default ProductList
