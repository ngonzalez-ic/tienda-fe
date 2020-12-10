import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bulma-components'


const Navigator=()=>
{
    return(
       <div style={{backgroundColor:'#00D1B2'}}>
	   	<Button color='primary' style={{ margin: '5px'}} ><Link to="/login"></Link>Login</Button>
	   	<Button color='primary' style={{ margin: '5px'}} ><Link to="/Productos"></Link>Productos</Button>
		<Button color='primary' style={{ margin: '5px'}} ><Link to="/Register"></Link>Registrese</Button>

	   </div>

)
}

export default Navigator
