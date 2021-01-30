import React from 'react'
import {Tile,Section,Box,Heading,Image} from 'react-bulma-components'
import Adoption from '../components/images/adopta.jpg'
import ImageProducts from '../components/images/host.jpg'
import Contact from '../components/images/charla.png'
import Paw from '../components/images/paw.png'
const About =()=>{
    return(
        <Section>
        <Box>
          <Tile kind="ancestor">
            <Tile size={8} vertical>
              <Tile>
                <Tile kind="parent" vertical>
                  <Tile renderAs="article" kind="child" notification color="primary" >
                    <Heading>PETS-STORE...</Heading>
                    <Heading subtitle>PEST-LOVE</Heading>
                    <Image  size={128} alt='128x128' src={Paw} style={{marginLeft:200}}/>
                  </Tile>
                  <Tile renderAs="article" kind="child" notification color="warning" style={{ display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
                    <Heading>Telefonos de contacto</Heading>
                    <Heading subtitle>(011-154396786)</Heading>
                    <Heading subtitle>(011-1543967867)</Heading>
                    
                    <Image  size={64} alt='64x64' src={Contact} style={{marginLeft:200}}/>
                  </Tile>
                  
                </Tile>
                <Tile kind="parent">
                  <Tile renderAs="article" kind="child" notification color="info">
                    <Heading>Nuevo sitio WEB...</Heading>
                    <Heading subtitle>Ingresa y accede a los mejores productos para tu mascota</Heading>
                    <Image size="4by3" src={ImageProducts} />
                  </Tile>
                </Tile>
              </Tile>
              <Tile kind="parent">
                <Tile renderAs="article" kind="child" notification color="danger">
                  <Heading>Seguinos en nuestas redes</Heading>
                  <Heading subtitle>Instagram:  @PetsLoveTienda_OK</Heading>
                  <Heading subtitle>Facebook: Tienda Pest Love</Heading>
                  <div className="content" />
                </Tile>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="success">
                <div className="content">
                  <Heading>Campañas de adopción</Heading>
                  <Heading subtitle>& hogares de transito</Heading>
                  <div className="content" />
                  <Image size="4by3" src={Adoption} />
                </div>
              </Tile>
            </Tile>
          </Tile>
        </Box>
      </Section>
    )
}
export default About