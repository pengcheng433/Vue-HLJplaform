import home from '@/views/Home.vue'

const service = {
  path: '/service',
  component: home,
  redirect: '/service/index',
  children: [
    {
      path: 'index',
      component: () =>
        import(/* webpackChunkName: "service"  */ '@/views/service/index.vue'),
    },
    {
      path: 'ywym',
      component: () =>
        import(/* webpackChunkName: "ywym"  */ '@/views/service/ywym.vue'),
    },
    {
      path: 'fwsy',
      component: () =>
        import(/* webpackChunkName: "fwsy"  */ '@/views/service/fwsy.vue'),
    },
    {
      path: 'smzq',
      component: () =>
        import(/* webpackChunkName: "smzq"  */ '@/views/service/smzq.vue'),
    },
    {
      path: 'szyx',
      component: () =>
        import(/* webpackChunkName: "szyx"  */ '@/views/service/szyx.vue'),
    },
    {
      path: 'shfw',
      component: () =>
        import(/* webpackChunkName: "shfw"  */ '@/views/service/shfw.vue'),
    },
    {
      path: 'sbzc',
      component: () =>
        import(/* webpackChunkName: "sbzc"  */ '@/views/service/sbzc.vue'),
    },
    {
      path: 'bgsz',
      component: () =>
        import(/* webpackChunkName: "bgsz"  */ '@/views/service/bgsz.vue'),
    },
    {
      path: 'gylg',
      component: () =>
        import(/* webpackChunkName: "gylg"  */ '@/views/service/gylg.vue'),
    },
    {
      path: 'khsz',
      component: () =>
        import(/* webpackChunkName: "khsz"  */ '@/views/service/khsz.vue'),
    },
    {
      path: 'szbx',
      component: () =>
        import(/* webpackChunkName: "szbx"  */ '@/views/service/szbx.vue'),
    },
  ],
}
export default [service]
