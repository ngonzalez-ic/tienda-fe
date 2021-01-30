import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Form as BulmaForms, Button,Section,Box,Image } from 'react-bulma-components'
import { loginUserWeb } from '../utils/index'
import ContextApi from '../context/contextApi'
import LogoLogin from '../components/images/login.png'

const { Field, Control, Label, Input } = BulmaForms

const Login = () => {
  const context = useContext(ContextApi)
  const [formValue, setFormValue] = useState({ email: '', password: '' })
  const history = useHistory()
  const handelChange = event => {
    const { name, value } = event.target
    setFormValue({ ...formValue, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    loginUserWeb(formValue)
      .then(data => {
        if (data.data.token) {
          context.loginUser(data.data.token, formValue.email)
          alert('Bienvenido/a', formValue.email)
          history.push('/')
        } else {
          alert('Verifica los datos ingresados')
        }
      },
      error => {
        console.log('error', error)
      })
      .catch(ex => console.error(ex))
  }

  return (
    <Section style={{ margin: '10% auto ', width: 500 }}>
        <Image  size={64} alt='64x64' src={LogoLogin} style={{display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}}/>
        <Box>
    
     <form onSubmit={handleSubmit} >
          <Field>
            <Label>Correo</Label>
            <Control>
              <Input
                placeholder='Correo'
                name='email'
                value={formValue.email}
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
                value={formValue.password}
                onChange={handelChange}
              />
            </Control>
          </Field>
          <Button type='submit' color='primary'>
            Iniciar
          </Button>
        </form>
    </Box>
    <p>
      En caso de NO registrado haga click  <strong> <a href='http://localhost:3000/register'>Aqui</a> </strong>. Para registrarse
    </p>
    </Section>

  )
}
export default Login
