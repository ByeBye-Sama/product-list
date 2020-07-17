const formConstraints = {
  email: {
    presence: {
      message: 'Insert an email'
    },
    email: {
      message: 'Insert a valid email'
    }
  },
  password: {
    presence: {
      message: 'Insert a password'
    }
  },
  c_password: {
    presence: {
      message: 'Confirm your password'
    },
    equality: {
      attribute: 'password',
      message: 'Password and their confirmation do not match'
    }
  },
  name: {
    presence: {
      message: 'Insert a name'
    }
  },
  description: {
    presence: {
      message: 'Insert a description'
    }
  },
  category: {
    presence: {
      message: 'Insert a category'
    }
  },
  price: {
    presence: {
      message: 'Insert a price'
    },
    format: {
      pattern: '[0-9]+',
      message: 'Insert only numbers'
    }
  }
}

export default formConstraints
