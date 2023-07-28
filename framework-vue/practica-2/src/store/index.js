import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('user'),
    user:       localStorage.getItem('user') || null
  },
  getters: {
  },
  mutations: {
    loginSuccess(state, user) {
      state.isLoggedIn = true;
      state.user = user;
      console.log('mutations loginSuccess');
    },
    logOut(state){
      state.isLoggedIn = false;
      state.user       = null;
    },
  },
  actions: {
    loginStore({ commit }, { username, password })
    {
      commit('loginSuccess', user);
      router.push('/');
    },
    logOut({ commit }){
      localStorage.removeItem('user');
      commit('logOut');
      router.push('login');
    },
  },
  modules: {
  }
})
