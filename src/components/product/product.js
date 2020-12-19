import { Card, Media, Content, Heading, Image, Columns } from 'react-bulma-components'

const Product=  ( products )=>{
  console.log(products.product,'asdfsdfsfsadf')
    return (
      <Columns>
      {products.product.map(
        ({ id, name }) => (
          <Columns.Column size={4} key={id}>
            <Card>
              
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