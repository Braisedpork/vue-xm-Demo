import Vue from 'vue'
import ElementUI from 'element-ui'
import { Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'   //日历
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
import Router from 'vue-router'
import Head_Bar from '@/components/Head_Bar'
import Welcome from '@/components/Welcome'
import Test_api from '@/components/Test_api'
import _Index from '@/components/Index'
import Chart from '@/components/Chart'
import Myinfo from '@/components/My_info'
import Draw from '@/components/Draw'
import Login from '@/components/Login'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(vueEventCalendar, { locale: 'zh' }) //可以设置语言，支持中文和英文

export default new Router({
  mode: 'hash',
  routes: [
    { path: "/", redirect: "/login" },  //重定向
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录',
        index: "0"
      }
    },
    {
      path: '/index/:name',
      name: 'Index',
      component: _Index,
      meta: {
        title: '首页',
        index: "1"
      },
      children: [
        {
          path: '/index/page',
          name: 'Welcome',
          component: Welcome,
          meta: {
            title: '首页',
            index: "1"
          }
        },
        {
          path: '/index/chart',
          name: 'Chart',
          component: Chart,
          meta: {
            title: '图表',
            index: "2-1"
          }
        },
        {
          path: '/index/get_record',
          name: 'Test_api',
          component: Test_api,
          meta: {
            title: '账号记录',
            index: "2-2"
          }
        },
        {
          path: '/index/myinfo',
          name: 'Myinfo',
          component: Myinfo,
          meta: {
            title: '我的资料',
            index: "2-3"
          }
        },
        {
          path: '/index/draw',
          name: 'Draw',
          component: Draw,
          meta: {
            title: '画板',
            index: "3-1"
          }
        },
        {
          path: '/index/t',
          name: 't',
          component: Head_Bar,
          meta: {
            title: '显示列表',
            index: "3-2"
          }
        },
        {
          path: '/index/show',
          name: 'show',
          component: Head_Bar,
          meta: {
            title: '富文本',
            index: "3-3"
          }
        }]
    }
  ]
})
