import Axios from 'axios'



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
