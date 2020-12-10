/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import { Card, Media, Content, Heading, Image } from 'react-bulma-components'
import { getProducts }from '../../utils/index'
import Loading from '../loading/Loading'

const Product= ()=>{
  const [products, setProduct] = useState([])
  const [isLoading, setLoading] = useState(true)

  async function loadProduct(){
    const response = await getProducts()
    if (response.status===200)
    console.log('test')
    setProduct(response.data)
  }
 // setLoading(false)

    useEffect(()=>{
      loadProduct()
    }, [])

    console.log(products);
    return(
        <Card style={{ margin: '10% auto ', width: 450 }}>
      <Card.Header>
        <Card.Header.Title>Title</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>@johnsmith</Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item renderAs="a" href="#Yes">Yes</Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="#No">No</Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href="#Maybe">Maybe</Card.Footer.Item>
      </Card.Footer>
    </Card>
    )
    
}

export default Product