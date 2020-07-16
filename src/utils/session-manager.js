import storage from './storage'

const keys = {
  TOKEN: 'token'
}

const sessionManager = {
  get token() {
    return storage.get(keys.TOKEN)
  },
  get isLoggedIn() {
    return !!this.token
  },
  logout: () => storage.clear(),
  login: loginData => {
    const { token } = loginData

    storage.set(keys.TOKEN, token)
  }
}

export default sessionManager
