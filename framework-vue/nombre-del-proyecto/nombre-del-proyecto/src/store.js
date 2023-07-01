import Vue from 'vue';
import Vuex from 'vuex';
import { userService } from './service/user.service';
import router from './router/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('user'),
    user:       localStorage.getItem('user') || null
  },
  mutations: {
    loginSuccess(state, user) {
        state.isLoggedIn = true;
        state.user = user;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
        /* commit('loginRequest', { username }); */
        userService.login(username, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    router.push('/');
                },
                error => {
                    console.log(error);
                }
            );
    },
  },
  getters: {
    // Definir tus getters aquí
  }
});

export default store;