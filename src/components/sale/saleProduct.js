import React, { useState, useEffect } from 'react'
import { getProductsbyID } from '../../utils'
import Loading from '../loading/Loading'
import { Card, Media, Image, Content, Heading, Columns, Box, Section, Level, Button } from 'react-bulma-components'
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
      {!isLoading && <Columns>
        <Columns.Column size='half' offset='one-quarter'>
          <Card>
            <Card.Header>
              <Card.Header.Title>{producto.name}</Card.Header.Title>
            </Card.Header>
            <Card.Content>
              <Media>
                <Card.Image size='4by3' style={{ width: 300, height: 400, display: 'flex', justifyContent: 'center' }} src={producto.image_path} />
                <Media.Item>
                  <Content style={{ display: 'flex', justifyContent: 'center', alineItem: 'center' }}>
                    {producto.description}
                  </Content>
                </Media.Item>
              </Media>

            </Card.Content>
            <Card.Footer>
              <Card.Footer.Item renderAs='a' href='/'><Level>
                <Level.Side align='left'>
                  <Button link>Volver</Button>
                </Level.Side>
               </Level></Card.Footer.Item>
              <Card.Footer.Item renderAs='a' href='#No'>            
              <Level>
                <Level.Side align='left'>
                  <Button link>comprar</Button>
                </Level.Side>
               </Level>
              </Card.Footer.Item>
              <Card.Footer.Item renderAs='a' href='#Maybe'>            
              <Level>
                <Level.Side align='left'>
                  <Button link>Like</Button>

                </Level.Side>
               </Level>
              </Card.Footer.Item>
            </Card.Footer>
          </Card>
        </Columns.Column>

                     </Columns>}
    </>
  )
}
export default SaleProduct
