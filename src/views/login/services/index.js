import axios from 'axios'

const baseUrl = 'https://product-crud-api-byebye.herokuapp.com/api'

export const signIn = async values => {
  try {
    const response = await axios({
      url: `${baseUrl}/login`,
      data: values,
      method: 'POST'
    })

    return response
  } catch (e) {
    console.error(e)
  }
}

export const signUp = async values => {
  try {
    const response = await axios({
      url: `${baseUrl}/register`,
      data: values,
      method: 'POST'
    })

    return response
  } catch (e) {
    console.error(e)
  }
}
