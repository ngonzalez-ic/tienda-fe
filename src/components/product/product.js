import { Link } from 'react-router-dom'
import { Card, Media, Heading, Image, Columns, Button } from 'react-bulma-components'

import IconLogo from '../images/logoP.png'

const Product = (products) => {
  return (
    <Columns style={{ margin: '2% 0 5% 10% ' }}>
      {products.product.map(
        ({ id, name, image_path, price, highligth }) => (
          <Columns.Column size={4} key={id}>
            <Card style={{ margin: '0px auto', width: 300 }}>
              <Card.Image size='4by3' style={{ width: 200, height: 200, display: 'flex', justifyContent: 'center' }} src={image_path} />
              <Card.Content>
                <Media>
                  <Media.Item renderAs='figure' position='left'>
                    <Image size={64} alt='64x64' src={IconLogo} />
                  </Media.Item>
                  <Media.Item>
                    <Heading size={4}>{name}</Heading>
                    <Heading subtitle size={6}>${price}</Heading>
                  </Media.Item>
                </Media>
              </Card.Content>
              <Card.Footer>
                <Button.Group centrer='true'>
                  <Link to={`/sale/${id}`}><Button variant='primary'>Ver Detalle</Button></Link>
                </Button.Group>
              </Card.Footer>
            </Card>
          </Columns.Column>

        )
      )}
    </Columns>

  )
}

export default Product
