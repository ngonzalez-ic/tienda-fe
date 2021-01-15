import React, { useState} from 'react'
import { Form as BulmaForms, Button, Heading } from 'react-bulma-components'
const { Field, Control, Label, Input,Select } = BulmaForms

const SaleFormModal = (props) => {
  const [formValue, setFormValue] = useState({ email: '', password: '' })
  const [modal, setModal]= useState(false)
console.log(props);
  const handelChange = event => {
    const { name, value } = event.target
    setFormValue({ ...formValue, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  
  }

  const handleClickCancelar= ()=>{
    setModal(false)
  }

  return (
    <><Heading size={2}>
        Formulario de pago
      </Heading>
     <form onSubmit={handleSubmit} style={{ margin: '10% auto ', width: 'auto', display: 'flex', justifyContent: 'center', flexDirection:'column',flexWrap:'nowrap'}}>
          <Field>
          <Heading subtitle size={4}>
            {props.producto.name}
            </Heading>
          </Field>
          <Field>
          <Heading subtitle size={3}>
             $ {props.producto.price} 
           <Heading subtitle size={6} renderAs="h2">IVA incluido</Heading> 
            </Heading>
          </Field>
          <Field>
              <Label>Metodo de pago</Label>
              <Control>
                <Select name="pay">
                  <option>Efectivo</option>
                  <option>Tarjeta</option>
                </Select>
              </Control>
            </Field>
            <Button.Group>
              <Button type='submit' color='primary'>
                Confirmar compra
              </Button>
              <Button modal={{ closeOnEsc: false }}color='danger'>
                Cancelar
              </Button>
            </Button.Group>
          
          </form>
    </>

  )
}
export default SaleFormModal 