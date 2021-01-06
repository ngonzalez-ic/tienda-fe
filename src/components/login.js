import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Form as BulmaForms, Button } from 'react-bulma-components'
import { loginUserWeb } from '../utils/index'
import Loading from '../components/loading/Loading'
import ContextApi from '../context/contextApi'
const { Field, Control, Label, Input } = BulmaForms

const Login = () => {
  const context = useContext(ContextApi)
  const [formValue, setFormValue] = useState({ email: '', password: '' })
  const [isLoading, setLoading] = useState(false)
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
          context.loginUser(data.data.token)
          console.log('Bienvenido/a')
          history.push('/')
        } else {
          alert('Ha ocurrido un error')
        }
        setLoading(true)
      },
      error => {
        console.log('error', error)
        setLoading(false)
      })
      .catch(ex => console.error(ex))
  }

  return (
    <>
      {isLoading
        ? <Loading />
        : <form onSubmit={handleSubmit} style={{ margin: '10% auto ', width: 450 }}>
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
            Guardar
          </Button>
          </form>}
    </>

  )
}
export default Login
