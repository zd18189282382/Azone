import Vue from 'vue'
import Router from 'vue-router'
import AzIndex from '../pages/AzIndex'
import AzClassification from "../pages/AzClassification"
import AzGoodslist from '../pages/AzGoodslist'
import AzGoodslistZonghe from '../components/AzGoodslist/AzGoodslistZonghe'
import AzGoodslistXiaoliang from '../components/AzGoodslist/AzGoodslistXiaoliang'
import AzGoodslistJiage from '../components/AzGoodslist/AzGoodslistJiage'
import AzGoodslistShaixuan from '../components/AzGoodslist/AzGoodslistShaixuan'
import cart from '../pages/AzCart'
import login from '../pages/AzSignin'
import AzRegister from '../pages/AzRegister'
import AzMy from '../pages/AzMy'
import AzGoodsinfo from '../pages/AzGoodsinfo'
import AzGoodsinfoGraphic from '../components/AzGoodsinfo/AzGoodsinfoGraphic'
import AzGoodsinfoParameter from '../components/AzGoodsinfo/AzGoodsinfoParameter'
import AzGoodsinfoAftermarket from '../components/AzGoodsinfo/AzGoodsinfoAftermarket'

Vue.use(Router)

export default new Router({
  mode:"history",
  linkExactActiveClass:"xxx",
  routes: [
    {
      path: '/',
      name: 'AzIndex',
      component: AzIndex,
      // redirect:"AzIndex"

    },
    {
      path: '/AzIndex',
      // name: 'AzIndex',
      component: AzIndex
    },
    {
      path: '/az',
      name: 'AzClassification',
      component: AzClassification
    },
    {
      path: '/AzGoodslist',
      // name: 'AzGoodslist',
      component: AzGoodslist,
      children:[
        {
          path:"",
          name: 'AzGoodslistZonghe',
          component:AzGoodslistZonghe
        },
        {
          path:"AzGoodslistXiaoliang",
          name: 'AzGoodslistXiaoliang',
          component:AzGoodslistXiaoliang
        },
        {
          path:"AzGoodslistJiage",
          name: 'AzGoodslistJiage',
          component:AzGoodslistJiage
        },
        {
          path:"AzGoodslistShaixuan",
          name: 'AzGoodslistShaixuan',
          component:AzGoodslistShaixuan
        }
      ]
    },
    {path:'/cart', name: 'cart',component:cart,
      beforeEnter: (to, from, next) => {
        if (to.path=='/cart' && localStorage.getItem("islogin")==1){
          next()
        }else if (to.path=='/cart' && localStorage.getItem("islogin")!=1) {
          next('/login')
        }
      }},
    {path:'/login',name: 'login',component:login},
    {
      path: '/AzRegister',
      name: 'AzRegister',
      component: AzRegister
    },
    {path:'/AzMy',name: 'AzMy',component:AzMy,
      beforeEnter: (to, from, next) => {
        if (to.path=='/AzMy' && localStorage.getItem("islogin")==1){
          next()
        }else if (to.path=='/AzMy' && localStorage.getItem("islogin")!=1) {
          next('/login')
        }
      }},
    {
      path: '/AzGoodsinfo',
      // name: 'AzGoodsinfo',
      component: AzGoodsinfo,
      children:[
        {
          path:"",
          name: 'AzGoodsinfoGraphic',
          component:AzGoodsinfoGraphic
        },
        {
          path:"AzGoodsinfoParameter",
          name: 'AzGoodsinfoParameter',
          component:AzGoodsinfoParameter
        },
        {
          path:"AzGoodsinfoAftermarket",
          name: 'AzGoodsinfoAftermarket',
          component:AzGoodsinfoAftermarket
        }
      ]
    },
  ],
  linkActiveClass: 'focus'
})
