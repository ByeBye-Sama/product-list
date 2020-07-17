import validate from 'validate.js'
import { mapValues, head } from 'lodash'

const config = {
  fullMessages: false
}

const getValidator = contraints => {
  const validator = values => {
    const errors = validate(values, contraints, config)

    return mapValues(errors, head)
  }

  return validator
}

export default getValidator
