import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import CorporationInfo from '../views/CorporationInfo.vue'
import Privacy from '../views/Privacy.vue'
import Usability from '../views/Usability.vue'
import Support from '../views/Support.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/corpinfo',
    name: 'CorporationInfo',
    component: CorporationInfo
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/usability',
    name: 'Usability',
    component: Usability
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
