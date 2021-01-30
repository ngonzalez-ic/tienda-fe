import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createSale } from '../../utils/index'
import { Form as BulmaForms, Button, Heading } from 'react-bulma-components'
const { Field, Control, Label, Select, Input } = BulmaForms

const SaleFormModal = (props,modal) => {
  const history = useHistory()
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
          onChange={handelChange}
          pattern="[a-z,A-Z,- -]{2,48}" 
          required
          />
          </Field>
          <Field>
            <Label>Numero</Label>
          <Input
            pattern="[0-1-2-3-4-5-6-7-8-9]{16}"
            placeholder='Numero de su tarjeta'
            name='numberCard'
            value={formValue.numberCard}
            onChange={handelChange}
            minlength='16'
            maxlength='16'
            required/>
          </Field>
          <Field>
            <Label>Clave de seguridad</Label>
          <Input
            pattern="[0-1-2-3-4-5-6-7-8-9]{3,4}"
            placeholder='Clave de su tarjeta'
            name='securityNumbreCard'
            value={formValue.securityNumbreCard}
            onChange={handelChange}
            minlength='3'
            maxlength='4'
            required/>
          </Field>
         </>
        :
        'Podras abonarlo en el local al retirar mencionando tu correo'}
      

        <Button.Group style={{ marginTop: 20 }}>
          <Button type='submit' color='primary'>
            Confirmar compra
          </Button>
          
        </Button.Group>
        

      </form>
      <Button onClick={()=>{ history.push('/')}} color='danger' style={{ margin: 'auto ', width: 'auto' }}>
            Cancelar
          </Button>
    </>

  )
}
export default SaleFormModal
