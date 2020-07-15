import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_BASE_URL

export const getProducts = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      method: 'GET'
    })

    return response
  } catch (e) {
    console.error(e)
  }
}

export const deleteProduct = async id => {
  try {
    const response = await axios({
      url: `${baseUrl}/products/${id}`,
      method: 'DELETE'
    })

    return response
  } catch (e) {
    console.error(e)
  }
}
