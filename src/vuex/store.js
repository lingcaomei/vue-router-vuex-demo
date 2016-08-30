import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  jobListData:{},
  findList:{},
  user:{}
}

const mutations = {

  GETJOBLIST (state, list){
    state.jobListData = list;
  },
  FINDLIST (state, list){
    state.findList = list;
  },
  USER (state, user){
    state.user = JSON.parse(user).users[0];
  }
}

export default new Vuex.Store({
  state,
  mutations
})