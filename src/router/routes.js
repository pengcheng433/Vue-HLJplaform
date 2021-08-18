import home from '@/views/Home.vue'
import index from '@/views/index.vue'
import news from '@/views/news/news.vue'
import news1 from '@/views/news/news1.vue'
import news2 from '@/views/news/news2.vue'
import news3 from '@/views/news/news3.vue'
import customer from '@/views/customer/customer'
import solution from '@/views/solution/index.vue'
import service from '@/views/service/index.vue'
import know from '@/views/know/index.vue'
import download from '@/views/know/download.vue'
import person from '@/views/person/index.vue'
import item from '@/views/item/index.vue'
import joinus from '@/views/joinus/index.vue'
import customer2 from '@/views/customer/customer2'
import Hld from '@/views/customer/hld.vue'
import Jjhb from '@/views/customer/jjhb.vue'
import Gjdl from '@/views/customer/gjdl.vue'
import Sjjx from '@/views/customer/sjjx.vue'
import Jyjx from '@/views/customer/jyjx.vue'
import Rksb from '@/views/customer/rksb.vue'
import Jsjc from '@/views/customer/jsjc.vue'
import hydj from '@/views/customer/hydj.vue'
import ybjx from '@/views/customer/ybjx.vue'
import kmfm from '@/views/customer/kmfm.vue'
import yzjx from '@/views/customer/yzjx.vue'
import wsjx from '@/views/customer/wsjx.vue'
import syzj from '@/views/customer/syzj.vue'
import lckj from '@/views/customer/lckj.vue'
import otkj from '@/views/customer/otkj.vue'
import ywym from '@/views/service/ywym.vue'
import fwsy from '@/views/service/fwsy.vue'
import smzq from '@/views/service/smzq.vue'
import szyx from '@/views/service/szyx.vue'
import shfw from '@/views/service/shfw.vue'
import sbzc from '@/views/service/sbzc.vue'
import bgsz from '@/views/service/bgsz.vue'
import gylg from '@/views/service/gylg.vue'
import khsz from '@/views/service/khsz.vue'
import szbx from '@/views/service/szbx.vue'

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
    meta: {
      title: '新闻中心',
    },
    children: [
      {
        path: 'news',
        component: news,
        meta: {
          title: '新闻中心',
        },
      },
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
    redirect: '/customer/customer',
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
      {
        path: 'sjjx',
        component: Sjjx,
      },
      {
        path: 'jyjx',
        component: Jyjx,
      },
      {
        path: 'rksb',
        component: Rksb,
      },
      {
        path: 'Jsjc',
        component: Jsjc,
      },
      {
        path: 'hydj',
        component: hydj,
      },
      {
        path: 'ybjx',
        component: ybjx,
      },
      {
        path: 'kmfm',
        component: kmfm,
      },
      {
        path: 'yzjx',
        component: yzjx,
      },
      {
        path: 'wsjx',
        component: wsjx,
      },
      {
        path: 'syzj',
        component: syzj,
      },
      {
        path: 'lckj',
        component: lckj,
      },
      {
        path: 'otkj',
        component: otkj,
      },
    ],
  },
  {
    path: '/solution',
    component: home,
    redirect: '/solution/index',
    children: [
      {
        path: 'index',
        component: solution,
      },
    ],
  },
  {
    path: '/service',
    component: home,
    redirect: '/service/index',
    children: [
      {
        path: 'index',
        component: service,
      },
      {
        path: 'ywym',
        component: ywym,
      },
      {
        path: 'fwsy',
        component: fwsy,
      },
      {
        path: 'smzq',
        component: smzq,
      },
      {
        path: 'szyx',
        component: szyx,
      },
      {
        path: 'shfw',
        component: shfw,
      },
      {
        path: 'sbzc',
        component: sbzc,
      },
      {
        path: 'bgsz',
        component: bgsz,
      },
      {
        path: 'gylg',
        component: gylg,
      },
      {
        path: 'khsz',
        component: khsz,
      },
      {
        path: 'szbx',
        component: szbx,
      },
    ],
  },
  {
    // 知识库  1.标识科普 2.标识文件
    path: '/know',
    component: home,
    redirect: '/know/index',
    children: [
      {
        path: 'index',
        component: know,
      },
      {
        path: 'download',
        component: download,
      },
    ],
  },
  {
    // 标识达人
    path: '/person',
    component: home,
    redirect: '/person/index',
    children: [
      {
        path: 'index',
        component: person,
      },
    ],
  },
  {
    // 项目合作
    path: '/item',
    component: home,
    redirect: '/item/index',
    children: [
      {
        path: 'index',
        component: item,
      },
    ],
  },
  {
    // 平台加盟
    path: '/joinus',
    component: home,
    redirect: '/joinus/index',
    children: [
      {
        path: 'index',
        component: joinus,
      },
    ],
  },
]
export default routes
