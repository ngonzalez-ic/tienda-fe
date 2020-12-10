import { Card, Media, Content, Heading, Image, Columns } from 'react-bulma-components'

const Product=  ( products )=>{
    return (
      <Columns>
        {products.map(
          ({ _id, name, size, unitaryPrice, description, imgUrl }) => (
            <Columns.Column size={4} key={_id}>
              <Card>
                {/* <Card.Image size='16by9' src={imgUrl}></Card.Image> */}
                <Card.Content>
                  <Content>
                    <Heading>{name}</Heading>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
          )
        )}
      </Columns>
    
  )
    
}

export default Product