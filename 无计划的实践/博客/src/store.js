import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appState: {
      doorState: {
        currentComponent: 'Login'
      }
    },
    userState: {
      loginUser: {
        createdAt: '',
        email: '',
        mobilePhoneNumber: '',
        objectId: '',
        sessionToken: '',
        username: ''
      }
    }
  },
  getters: {
    getLoginUser: state => {
      return state.userState.loginUser;
    },
    getDoorState: state => {
      return state.appState.doorState;
    }
  },
  mutations: {
    modifyLoginUserState: (state, payload) => {
      state.userState.loginUser = payload;
    },
    modifyDoorState: (state, payload) => {
      state.appState.doorState.currentComponent = payload;
    }
  },
  actions: {
    modifyLoginUserState: ({ commit }, payload) => {
      commit(payload.type, payload.user);
    },
    modifyDoorState: ({ commit }, payload) => {
      commit(payload.type, payload.value);
    }
  }
});
