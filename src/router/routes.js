import home from '@/views/Home.vue'
import index from '@/views/index.vue'
import news1 from '@/views/news/news1.vue'
import news2 from '@/views/news/news2.vue'
import news3 from '@/views/news/news3.vue'
import customer from '@/views/customer/customer'
import Hld from '@/views/customer/hld.vue'
const routes = [
  {
    path: '/index',
    name: 'home',
    component: home,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/index',
        component: index,
      },
    ],
  },
  {
    path: '*',
    redirect: {
      path: '/index',
    },
  },
  {
    path: '/new',
    component: home,
    redirect: '/new1',
    children: [
      {
        path: 'new1',
        component: news1,
      },
      {
        path: 'new2',
        component: news2,
      },
      {
        path: 'new3',
        component: news3,
      },
    ],
  },
  {
    path: '/customer',
    component: home,
    redirect: '/customer',
    children: [
      {
        path: 'customer',
        component: customer,
      },
      {
        path: 'hld',
        component: Hld,
      },
    ],
  },
]
export default routes
