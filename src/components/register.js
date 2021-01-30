import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Form as BulmaForms, Button,Section,Box,Image } from 'react-bulma-components'
import { createUserWeb } from '../utils/index'
import LogoRegister from '../components/images/registrarse.png'

const { Field, Control, Label, Input } = BulmaForms

const Register = () => {
  const [register, setRegister] = useState({ user: '', email: '', password: '' })
  const history = useHistory()
  
  const handelChange = e => {
    
    
    const { name, value } = e.target
    setRegister({ ...register, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWeb(register)
    .then(data => {
      if (data.status===201) {
        alert('Gracias por unitre')
        history.push('/login')
      } else {
        alert('Ups, algo salio mal')
      }
    },
    error => {
      console.log('error', error)
    })
    .catch(ex => console.error(ex))
      
  }
  return (
        <>
       
        <Section style={{ margin: '10% auto ', width: 450 }}>
        <Image  size={64} alt='64x64' src={LogoRegister} style={{display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}}/>
            <Box>
            <form onSubmit={handleSubmit} >
                <Field>
                  <Label>Usuario</Label>
                  <Control>
                    <Input
                      placeholder='Nombre'
                      name='user'
                      value={register.user}
                      onChange={handelChange}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label>Correo</Label>
                  <Control>
                    <Input
                      type='email'
                      placeholder='Correo'
                      name='email'
                      value={register.email}
                      onChange={handelChange}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label>Password</Label>
                  <Control>
                    <Input
                      placeholder='Password'
                      type='password'
                      name='password'
                      value={register.password}
                      onChange={handelChange}
                    />
                  </Control>
                </Field>
                <Button type='submit' color='primary'>
                  Registrar
                </Button>
              </form>
            </Box>
            <p>
              En caso de ya estar registrado haga click  <strong> <a href='http://localhost:3000/login'>Aqui</a> </strong>
            </p>
          </Section>

        </>
          
              

  )
}

export default Register
