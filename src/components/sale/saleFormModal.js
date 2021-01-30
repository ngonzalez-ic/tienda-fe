import React, { useState } from 'react'
import { createSale } from '../../utils/index'
import { Form as BulmaForms, Button, Heading } from 'react-bulma-components'
const { Field, Control, Label, Select, Input } = BulmaForms

const SaleFormModal = (props) => {
  const [formValue, setFormValue] = useState({})
  const [desableButton, setDeseableButton] = useState(true)
  const [count, setCount] = useState(1)

  const userWeb = localStorage.getItem('login')
  const userId = JSON.parse(userWeb)

  const handelChange = event => {
    const { name, value } = event.target
    console.log(name,value);
    setFormValue({ ...formValue,[name]: value,
      userId:userId.user,
      productID:props.producto.id,
      price:props.producto.price,
      unit:count,
      status:'pendiene'
    })
  }
  const handleClick = (e) => {
    e.preventDefault()
    const unit = count - 1
    setCount(unit)
    botonDeseable(unit)
  }

  const handleClickPlus = (e) => {
    e.preventDefault()
    const unit = count + 1
    setCount(unit)
    botonDeseable(unit)
  } 

  const botonDeseable = (unit) => {
    if (unit <= 1) {
      setDeseableButton(true)
    } else {
      setDeseableButton(false)
    }
  }

  const handleSubmit = (e)=>{
    alert('gracias por tu compra')
    createSale(formValue);

  }
  return (
    <>
      <form onSubmit={handleSubmit}style={{ margin: 'auto ', width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', flexWrap: 'nowrap' }}>
        <Heading size={2}>
          Formulario de compra
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
          <Label>Cantidad {count}</Label>
          <Button onClick={handleClick} disabled={desableButton}>-</Button>

          <Button onClick={handleClickPlus}>+</Button>

        </Field>
         <Field>
          <Label>Metodo de pago</Label>
          <Control>
            <Select onChange={handelChange} name='method' value={formValue.method}>
            <option value=''></option>
              <option value='efectivo'>Efectivo</option>
              <option value='tarjeta'>Tarjeta</option>
            </Select>
          </Control>
        </Field>
        {formValue.method === 'tarjeta'?
         <>
         <Field > 
           <Label>Nombre del titular</Label>
          <Input 
          placeholder='Tal cual figura en su tarjeta'
          name='ownerCard'
          value={formValue.ownerCard}
          onChange={handelChange}/>
          </Field>
          <Field>
            <Label>Numero</Label>
          <Input
            placeholder='Numero de su tarjeta'
              name='numberCard'
            value={formValue.numberCard}
            onChange={handelChange}/>
          </Field>
          <Field>
            <Label>Clave de seguridad</Label>
          <Input
            placeholder='Clave de su tarjeta'
              name='securityNumbreCard'
            value={formValue.securityNumbreCard}
            onChange={handelChange}/>
          </Field>
         </>
        :
        'Podras abonarlo en el local al retirar mencionando tu correo'}
      

        <Button.Group style={{ marginTop: 20 }}>
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
