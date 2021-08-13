import home from '@/views/Home.vue'
import index from '@/views/index.vue'
import news1 from '@/views/news/news1.vue'
import news2 from '@/views/news/news2.vue'
import news3 from '@/views/news/news3.vue'
import customer from '@/views/customer/customer'
import customer2 from '@/views/customer/customer2'
import Hld from '@/views/customer/hld.vue'
import Jjhb from '@/views/customer/jjhb.vue'
import Gjdl from '@/views/customer/gjdl.vue'
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
        meta: {
          title: '标识解析服务平台',
        },
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
    meta: {
      title: '新闻中心',
    },
    children: [
      {
        path: 'new1',
        component: news1,
        meta: {
          title: '新闻中心',
        },
      },
      {
        path: 'new2',
        component: news2,
        meta: {
          title: '新闻中心',
        },
      },
      {
        path: 'new3',
        component: news3,
        meta: {
          title: '新闻中心',
        },
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
        path: 'customer2',
        component: customer2,
      },
      {
        path: 'hld',
        component: Hld,
      },
      {
        path: 'jjhb',
        component: Jjhb,
      },
      {
        path: 'gjdl',
        component: Gjdl,
      },
    ],
  },
]
export default routes
