import React from 'react'
import { Footer, Container, Content, Hero } from 'react-bulma-components'

const FooterComponent = () => {
  return (
    <Hero >
      <Hero.Head renderAs='footer' />
      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p>
                <strong>Tienda</strong> by <a href='https://github.com/ngonzalez-ic'>Carlo N Gonzalez</a>. The source code is licensed
                <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website content
                is licensed <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
              </p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
  )
}

export default FooterComponent
