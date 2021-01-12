import React, { useState} from 'react'
import { Form as BulmaForms, Button } from 'react-bulma-components'
const { Field, Control, Label, Input,Select } = BulmaForms

const SaleFormModal = () => {
  const [formValue, setFormValue] = useState({ email: '', password: '' })

  const handelChange = event => {
    const { name, value } = event.target
    setFormValue({ ...formValue, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  
  }

  return (
    <>
     <form onSubmit={handleSubmit} style={{ margin: '10% auto ', width: 'auto', display: 'flex', justifyContent: 'center', flexDirection:'column',flexWrap:'nowrap'}}>
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
          <Field>
              <Label>Metodo de pago</Label>
              <Control>
                <Select onChange={''} name="gender" value={''}>
                  <option value="">Efectivo</option>
                  <option value="male">Tarjeta</option>
                </Select>
              </Control>
            </Field>
          <Button type='submit' color='primary'>
            Confirmar compra
          </Button>
          </form>
    </>

  )
}
export default SaleFormModal 