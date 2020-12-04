import React, {useState} from 'react'
import { Form as BulmaForms, Button } from 'react-bulma-components'
const { Field, Control, Label, Input } = BulmaForms


    const Login = ({ handleSubmit }) => {
        const [formValue, setFormValue] = useState({
            user: '',
            password:''
          })
        const handelChange = event => {
            const { name, value } = event.target
            setFormValue({ ...formValue, [name]: value })
          }
          const _handleSubmit = e => {
            e.preventDefault()
            handleSubmit({ ...formValue })
          }

        return (
            <form onSubmit={_handleSubmit}>
                <Field>
                    <Label>Usuario</Label>
                    <Control>
                        <Input placeholder="Usuario"
                        name='user'
                        value={formValue.user}
                        onChange={handelChange}/>
                    </Control>
                </Field>
                <Field>
                    <Label>Password</Label>
                    <Control>
                        <Input placeholder="Password"
                        type='password'
                        name='password'
                        value={formValue.password}
                        onChange={handelChange}/>
                    </Control>
                </Field>
                <Button type='submit' color='primary'>
                    Guardar
                </Button>
            </form>
        )
      }
export default Login