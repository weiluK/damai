import Vue from 'vue'
import Router from 'vue-router'

import goodsList from './components/pages/goodsList.vue'
import carts from './components/carts/carts.vue'
import addNewAddress from './components/carts/addNewAddress.vue'
import getall from './components/pages/getall.vue'

Vue.use(Router)

import login from "./components/login/login.vue";
import register from "./components/register/register.vue";
import mine from "./components/mine/mine.vue";
import homesearch from "./components/home/homesearch.vue";
import home from "./components/home/home.vue";
import city from "./components/home/city.vue";

import detail from './components/detail/detail.vue';



export default new Router({

  routes: [{
      name: "city",
      path: "/city",
      component: city,
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "home",
      path: "/home",
      component: home,
      children: [

      ]
    },
    {
      name: "search",
      path: "/search",
      component: homesearch,
    },


    {
      name: "mine",
      path: "/mine",
      component: mine,
    },
    {
      name: "login",
      path: "/login",
      component: login,
    },
    {
      name: "register",
      path: "/register",
      component: register,
    },
    {
      name: 'goodslist',
      path: '/goodslist',
      component: goodsList,
      children: [{
        name: 'getall',
        path: 'getall',
        component: getall,
      }]
    },
    {
      name: 'carts',
      path: '/carts',
      component: carts,
      children: [{
        name: 'addnewaddress',
        path: 'addnewaddress',
        component: addNewAddress,
      }, ]
    }, {
      //当浏览器地址为#/detail时，渲染detail组件、同下
      name: 'Detail',
      path: '/detail',
      component: detail
    }
  ]
})