import React, { useState } from 'react'
import { Form as BulmaForms, Button, Heading } from 'react-bulma-components'
const { Field, Control, Label, Input, Select } = BulmaForms

const SaleFormModal = (props) => {
  const [formValue, setFormValue] = useState({ email: '', password: '' })
  const [pay, setPay] = useState('Efectivo')

  const userWeb= localStorage.getItem('login')
  const x =JSON.parse(userWeb)
  console.log(x.user)

  const handelChange = event => {
    const { name, value } = event.target
    setFormValue({ ...formValue, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handlOnChange = (e) => {
    const { value } = e.target
    console.log(value)
    setPay(value)
  }
  console.log();

  return (
    <>
      <form onSubmit={handleSubmit} style={{ margin: 'auto ', width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', flexWrap: 'nowrap' }}>
        <Heading size={2}>
          Formulario de pago
        </Heading>

        <Field>
          <Heading subtitle size={4}>
            {props.producto.name}
          </Heading>
        </Field>
        <Field>
          <Heading size={3} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
            $ {props.producto.price}
            <Heading subtitle size={6} renderAs='h2'>*IVA incluido</Heading>
          </Heading>
        </Field>
        <Field>
          <Label>Metodo de pago</Label>
          <Control>
            <Select onChange={handlOnChange} value={pay}>
              <option value='Efectivo'>Efectivo</option>
              <option value='Tarjeta'>Tarjeta</option>
            </Select>
          </Control>
        </Field>
        <Button.Group>
          <Button type='submit' color='primary'>
            Confirmar compra
          </Button>
          <Button color='danger'>
            Cancelar
          </Button>
        </Button.Group>

      </form>
    </>

  )
}
export default SaleFormModal
