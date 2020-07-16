import axios from 'axios'
import { sessionManager } from 'utils'

const baseUrl = process.env.REACT_APP_API_BASE_URL

const { token } = sessionManager

const auth = {
  Authorization: `Bearer ${token}`
}

export const getProducts = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      method: 'GET',
      headers: auth
    })

    return response
  } catch (e) {
    console.error(e)
  }
}

export const createProduct = async values => {
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      data: values,
      method: 'POST',
      headers: auth
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
      method: 'DELETE',
      headers: auth
    })

    return response
  } catch (e) {
    console.error(e)
  }
}

export const updateProduct = async (id, values) => {
  try {
    const response = await axios({
      url: `${baseUrl}/products/${id}`,
      data: values,
      method: 'PUT',
      headers: auth
    })

    return response
  } catch (e) {
    console.error(e)
  }
}
