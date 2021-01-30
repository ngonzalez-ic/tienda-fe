import React, { useState } from 'react'
import { Form as BulmaForms, Button } from 'react-bulma-components'
import { createUserWeb } from '../utils/index'
const { Field, Control, Label, Input } = BulmaForms

const Register = () => {
  const [register, setRegister] = useState({ user: '', email: '', password: '' })

  const handelChange = e => {
    const { name, value } = e.target
    setRegister({ ...register, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWeb(register)
  }
  return (
    <form onSubmit={handleSubmit} style={{ margin: '10% auto ', width: 450 }}>
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

  )
}

export default Register
