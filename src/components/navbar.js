import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bulma-components'

const Navigator=()=>
{
    return(
       <div style={{backgroundColor:'#00D1B2'}}>
	   	<Button color='primary' style={{ margin: '5px'}}><Link to="/login" style={{color:'white' }}>Login</Link></Button>
	   	<Button color='primary' style={{ margin: '5px'}}><Link to="/productos" style={{color:'white' }}>Productos</Link></Button>
		<Button color='primary' style={{ margin: '5px'}} ><Link to="/register" style={{color:'white' }}>Registrese</Link></Button>

	   </div>

)
}

export default Navigator
