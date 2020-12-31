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

export async function getProducts (serch='') {
  try {
    const response = await Axios({
      method: 'GET',
      url: 'http://localhost:3001/productos/?serch='+serch
    })
    return response
    
  } catch (e) {
    console.log(e)
  }
}
export async function getProductsbyID (id) {
  try {
    const response = await Axios({
      method: 'GET',
      url: 'http://localhost:3001/productos/'+id
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
