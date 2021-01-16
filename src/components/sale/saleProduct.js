import React, { useState, useEffect } from 'react'
import { getProductsbyID } from '../../utils'
import Loading from '../loading/Loading'
import { Card, Media, Image, Content, Heading, Columns, Box, Section, Level, Button, Modal } from 'react-bulma-components'
import SaleFormModal from './saleFormModal'
const SaleProduct = (props) => {
  const key = props.match.params.id
  const [producto, setProduct] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  useEffect(
    () => {
      async function fetchtData () {
        const response = await getProductsbyID(key)
        setProduct(response.data)
        setLoading(false)
      }
      fetchtData()
    }, []
  )
  const handleClick = () => {
    setModal(true)
  }
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
              <Media style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              </Level>
              </Card.Footer.Item>
              <Card.Footer.Item>
                <Level>
                  <Level.Side align='left'>
                    <Button onClick={handleClick}>comprar</Button>
                  </Level.Side>
                </Level>
              </Card.Footer.Item>
              <Card.Footer.Item>
                <Level>
                  <Level.Side align='left'>
                    <h3>Stock: <strong>{producto.stock}</strong></h3>

                  </Level.Side>
                </Level>
              </Card.Footer.Item>
            </Card.Footer>
          </Card>
        </Columns.Column>

      </Columns>}
      {modal === true && <>
        <Modal show={modal} onClose={() => setModal(false)}>
          <Modal.Card>
            <Modal.Content>
              <Section style={{ backgroundColor: 'white' }}>
                <SaleFormModal producto={producto} modal={modal} />
              </Section>
            </Modal.Content>
          </Modal.Card>
        </Modal>
                         </>}
    </>
  )
}
export default SaleProduct
