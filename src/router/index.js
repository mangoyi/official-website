import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from './../views/Index.vue'
import Plan from './../views/Plan.vue'
import Product from './../views/Product.vue'
import Techsupport from './../views/Techsupport.vue'
import Partner from './../views/Partner.vue'
import Platform from './../views/Platform.vue'
import Aboutus from './../views/Aboutus.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/techsupport',
      name: 'Techsupport',
      component: Techsupport
    },
    {
      path: '/partner',
      name: 'Partner',
      component: Partner
    },
    {
      path: '/platform',
      name: 'Platform',
      component: Platform
    },
    {
      path: '/aboutus',
      name: 'Aboutus',
      component: Aboutus
    }
  ]
})
