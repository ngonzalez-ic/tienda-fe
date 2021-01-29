import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bulma-components'
import ContextApi from '../context/contextApi'

const exit = ()=>{
  localStorage.removeItem("login")

}

const Navigator = () => {
  return (
    <ContextApi.Consumer>
      {context => (
        <div style={{ backgroundColor: '#00D1B2' }}>
          <Button color='primary' style={{ margin: '5px' }}><Link to='/' style={{ color: 'white' }}>Inicio</Link></Button>
          {context.login && <Button color='primary' 
          style={{ margin: '5px' }} onClick={exit}>Salir
            </Button>}
          {!context.login && <>
            <Button color='primary' style={{ margin: '5px' }}><Link to='/login' style={{ color: 'white' }}>Login</Link></Button>
            <Button color='primary' style={{ margin: '5px' }}><Link to='/register' style={{ color: 'white' }}>Registrese</Link></Button>
          </>}
        </div>
      )}
    </ContextApi.Consumer>

  )
}

export default Navigator
