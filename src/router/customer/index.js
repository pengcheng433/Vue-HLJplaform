import home from '@/views/Home.vue'

const customer = {
  path: '/customer',
  component: home,
  redirect: '/customer/customer',
  children: [
    {
      path: 'customer',
      component: () =>
        import(
          /* webpackChunkName: "customer"  */ '@/views/customer/customer.vue'
        ),
    },
    {
      path: 'customer2',
      component: () =>
        import(
          /* webpackChunkName: "customer2"  */ '@/views/customer/customer2.vue'
        ),
    },
    {
      path: 'hld',
      component: () =>
        import(/* webpackChunkName: "hld"  */ '@/views/customer/hld.vue'),
    },
    {
      path: 'jjhb',
      component: () =>
        import(/* webpackChunkName: "jjhb"  */ '@/views/customer/jjhb.vue'),
    },
    {
      path: 'gjdl',
      component: () =>
        import(/* webpackChunkName: "gjdl"  */ '@/views/customer/gjdl.vue'),
    },
    {
      path: 'sjjx',
      component: () =>
        import(/* webpackChunkName: "gjdl"  */ '@/views/customer/sjjx.vue'),
    },
    {
      path: 'jyjx',
      component: () =>
        import(/* webpackChunkName: "jyjx"  */ '@/views/customer/jyjx.vue'),
    },
    {
      path: 'rksb',
      component: () =>
        import(/* webpackChunkName: "rksb"  */ '@/views/customer/rksb.vue'),
    },
    {
      path: 'jsjc',
      component: () =>
        import(/* webpackChunkName: "Jsjc"  */ '@/views/customer/jsjc.vue'),
    },
    {
      path: 'hydj',
      component: () =>
        import(/* webpackChunkName: "hydj"  */ '@/views/customer/hydj.vue'),
    },
    {
      path: 'ybjx',
      component: () =>
        import(/* webpackChunkName: "ybjx"  */ '@/views/customer/ybjx.vue'),
    },
    {
      path: 'kmfm',
      component: () =>
        import(/* webpackChunkName: "kmfm"  */ '@/views/customer/kmfm.vue'),
    },
    {
      path: 'yzjx',
      component: () =>
        import(/* webpackChunkName: "yzjx"  */ '@/views/customer/yzjx.vue'),
    },
    {
      path: 'wsjx',
      component: () =>
        import(/* webpackChunkName: "wsjx"  */ '@/views/customer/wsjx.vue'),
    },
    {
      path: 'syzj',
      component: () =>
        import(/* webpackChunkName: "syzj"  */ '@/views/customer/syzj.vue'),
    },
    {
      path: 'lckj',
      component: () =>
        import(/* webpackChunkName: "lckj"  */ '@/views/customer/lckj.vue'),
    },
    {
      path: 'otkj',
      component: () =>
        import(/* webpackChunkName: "otkj"  */ '@/views/customer/otkj.vue'),
    },
  ],
}
export default [customer]
