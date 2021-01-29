import { React, useState, useEffect } from 'react'
import Product from './product'
import { getProducts } from '../../utils/index'
import Loading from '../loading/Loading'
import { Form as BulmaForms } from 'react-bulma-components'
const { Field, Control, Input } = BulmaForms

const ProductList = () => {
  const [product, setProduct] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  async function loadProduct () {
    const response = await getProducts(search)
    if (response && response.status === 201) { setProduct(response.data.product) } else {
      setLoading(true)
    }
  }
  useEffect(() => {
    loadProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const handleChange = (e) => {
    setSearch(e.target.value)
    e.preventDefault()
  }

  return (

    <>
      <form onChange={handleChange} style={{ display: 'flex', justifyContent: 'center' }}>
        <Field>
          <Control>
            <Input
              type='text' placeholder='Busca tu producto'
              color='success'
              name='search'
              value={search}
              style={{}}
            />
          </Control>
        </Field>

      </form>

      {!isLoading && <Loading />}
      {!product.length && (
        <>
          <h1 className='title has-text-centered'>'Lista de productos vacia'</h1>
          <Loading />
        </>)}
      {isLoading && product.length && <Product product={product} style={{ backgroundColor: 'red' }} />}

    </>

  )
}

export default ProductList
