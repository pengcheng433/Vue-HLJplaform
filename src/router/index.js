import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
// 路由配置
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    //判断是否有标题
    document.title = to.meta.title
  }
  next()
})

// router.afterEach((to, from, next) => {
//   window.scrollTo(0, 0)
// })

export default router
