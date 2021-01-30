import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import { Button } from 'react-bulma-components'
import ContextApi from '../context/contextApi'





const Navigator = () => {
  
  const history = useHistory()
  const exit = ()=>{
    localStorage.removeItem("login")
    history.push('/login')
  }

  const singIn = ()=>{
    history.push('/login')
  }

  const singUot = ()=>{
    history.push('/login')
  }

  return (
    <ContextApi.Consumer>
      {context => (
        <div style={{ backgroundColor: '#00D1B2' }}>
          <Button color='primary' style={{ margin: '5px' }}><Link to='/' style={{ color: 'white' }}>Inicio</Link></Button>
          
          {context.login && <Button color='primary' 
          style={{ margin: '5px' }} onClick={exit}>Salir
            </Button>}
          {!context.login && <>
            <Button color='primary' style={{ margin: '5px' }} onClick={singIn}>Login</Button>
            <Button color='primary' style={{ margin: '5px' }} onClick={singUot}>Registrese</Button>
          </>}
        </div>
      )}
    </ContextApi.Consumer>

  )
}

export default Navigator
