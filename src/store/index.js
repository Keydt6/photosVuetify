import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { state } from './state';
import { actions } from './actions';

export const store = new Vuex.Store({
  state,
  actions,
  mutations: {
    logIn(state) {
      state.loggedIn = true;
    },
    logInStep(state) {
      state.loginStep = state;
    }
  },
  getters: {
    isLoggedIn: state => state.loggedIn,
    loginStep: state => state.loginStep,
  }
});