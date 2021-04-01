import {
  loginApi,
  registerApi
} from '../api/modules'

import router from '../router'

export const actions = {
  async loginAction ({ commit }, payload) {
    let serviceResponse = await loginApi(payload)
    console.log('serviceResponse', serviceResponse)
    if (serviceResponse.ok) {
        commit("logIn", true)
        localStorage.setItem('userLogged', JSON.stringify(serviceResponse.user))
        localStorage.setItem('token', serviceResponse.token)
    } else {
      const params = { text: serviceResponse.message.text }
      window.getApp.$emit('SHOW_ERROR', params)
      // router.push({ name: 'Login' })
    }
  },

  async logoutAction ({ commit }) {
    localStorage.clear()
    commit("logIn", false)
    router.push({ name: 'login' })
  },

  async registerAction ({ commit }, payload) {
    //
    let serviceResponse = await registerApi(payload)
    if (serviceResponse.ok) {
        commit("logInStep", 1)
        const params = { text: serviceResponse.message }
        window.getApp.$emit('SHOW_ERROR', params)
    } else {
      const params = { text: serviceResponse.message.text }
      window.getApp.$emit('SHOW_ERROR', params)
      // router.push({ name: 'login' })
    }
  },
}
