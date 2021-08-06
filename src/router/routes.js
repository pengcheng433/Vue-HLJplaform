import home from "@/views/Home.vue"
import index from "@/views/index.vue"
const routes = [
  {
      path: '/index',
      name: 'home',
      component:home,
      meta: {
          title: '首页'
      },
      children: [
        {
       
          path: '/index',
          component: index
        },
      
      ]
  },
  {
      path: '*',
      redirect: {
          path: '/index'
      }
  }
];
export default routes;
