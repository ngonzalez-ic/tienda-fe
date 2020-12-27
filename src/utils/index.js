import Axios from 'axios'

export async function createUserWeb (data) {
  try {
    const response =await Axios({
      method:'POST',
      url:'http://localhost:3001/usuariosWeb',
      data:data
    })
return response

  }catch(e){
  console.log(e)}
}

export async function getProducts () {
  try {
    const response = await Axios({
      method: 'GET',
      url: 'http://localhost:3001/productos'
    })
    return response
  } catch (e) {
    console.log(e)
  }
}
export async function loginUserWeb (data) {
  try {
    const response = await Axios({
      method: 'POST',
      url:'http://localhost:3001/usuariosweb/login',
      data:data
    })
    return response
  } catch (e) {
    console.log(e)    
  }
}
