import React, { useState, useEffect } from 'react'
import { getProductsbyID } from '../../utils'
import Loading from '../loading/Loading'
import { Card, Media, Image, Content, Heading } from 'react-bulma-components'

const SaleProduct = (props) => {
  console.log(props.match.params.id)
  const key = props.match.params.id
  const [producto, setProduct] = useState([])
  const [isLoading, setLoading] = useState(false)
  useEffect(
    () => {
      async function fetchtData () {
        const response = await getProductsbyID(key)
        console.log(response)
        setProduct(response.data)
        setLoading(false)
      }
      fetchtData()
    }, []
  )
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <Card style={{ display: 'flex', justifyContent: 'center' }}>
        <Card.Header>
          <Card.Header.Title>{producto.name}</Card.Header.Title>
        </Card.Header>
        <Card.Content>
          <Media>
            <Media.Item renderAs='figure' position='left'>
              <Image size={64} alt='64x64' src='http://bulma.io/images/placeholders/128x128.png' />
            </Media.Item>
            <Media.Item>
              <Heading size={4}>John Smith</Heading>
              <Heading subtitle size={6}>@johnsmith</Heading>
            </Media.Item>
          </Media>
          <Content>
            {producto.description}
          </Content>
        </Card.Content>
        <Card.Footer>
          <Card.Footer.Item renderAs='a' href='#Yes'>Yes</Card.Footer.Item>
          <Card.Footer.Item renderAs='a' href='#No'>No</Card.Footer.Item>
          <Card.Footer.Item renderAs='a' href='#Maybe'>Maybe</Card.Footer.Item>
        </Card.Footer>
      </Card>}
    </>
  )
}
export default SaleProduct
