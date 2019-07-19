import Vue from 'vue'
import Vuex from 'vuex'
import {
  log
} from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAddress: [{
        id: 1,
        name: "何葵司",
        phone: 19071458647,
        addres: "湖南省益阳市赫山区龙岭工业园湖南省益阳市赫山区龙岭工业园29路风波庄",
        iddefault: true,
        selecred: true
      },
      {
        id: 2,
        name: "李丽华",
        phone: 15651458647,
        addres: "天津天津市河西区陈塘庄街道天津天津市河西区陈塘庄街道清远路北",
        iddefault: false,
        selecred: false
      },
      {
        id: 3,
        name: "张耿耿",
        phone: 188222458647,
        addres: "天津天津市河西区陈塘庄街道天津天津市河西区陈塘庄街道清远路北",
        iddefault: false,
        selecred: false
      }
    ],
    isSelected: '',
  },
  mutations: {
    select(state, id) {

      state.userAddress.forEach(element => {
        element.selecred = false;

      });
      state.userAddress[id - 1].selecred = true;
      state.isSelected = state.userAddress[id - 1]


    },
  },
  actions: {

  }
})