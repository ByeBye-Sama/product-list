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

export const createProduct = async values => {
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      data: values,
      method: 'POST'
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

export const updateProduct = async (id, values) => {
  try {
    const response = await axios({
      url: `${baseUrl}/products/${id}`,
      data: values,
      method: 'PUT'
    })

    return response
  } catch (e) {
    console.error(e)
  }
}
