import Vue from 'vue';
import Router from 'vue-router';
// import store from 'src/vuex/store.js';

const vuetify = () => import('@/components/vuetify');
const vuexdemo = ()=> import('@/components/vuex/vuexdmeo');
Vue.use(Router);

const router = new Router({
  routes: [
    // {
    //   path: '/login', /* 登录界面 */
    //   name: 'login',
    //   component: login/* ,hidden: true, // 自定义属性，在组件中可以通过 this.$route.hidden 获取值 */
    // },
    // {
    //   path: '/sysSetting', /* 首页 */
    //   component: sysSetting,
    //   name: 'sysSetting', /* this.$route.matched.filter(item => item.name) */
    //   meta: {
    //     keepAlive: false, /* 用于在 <keep-alive> 中使用，判断是否需要进行缓存 */
    //     auth: true, /* 自定义属性，用于判断是否进行校验,在router.beforeEach中使用 */
    //     title: '系统设置' /* 可以通过$route.meta.title 后取当前的描述信息、菜单信息 */
    //   }
    // },
    // {
    //   path: '*', /* 默认跳转到登录界面 */
    //   redirect: {path: '/sysSetting'}
    // },
    {
      path: '/vuetify',
      name:'vuetify',
      component: vuetify
    },{
      path: '/',
      name:'vuexdemo',
      component: vuexdemo
    }
  ]
});

// router.beforeEach((to, from, next) => {// 注册一个全局前置守卫
//   if (to.meta.title) { // 路由发生变化修改页面title
//     document.title = to.meta.title;
//   }
  
//   if (to.matched.some(m => m.meta.auth)) {// 判断是否需要校验
//     if (store.state.isLogin) {// 获取
//       next();// 校验通过，正常跳转到你设置好的页面
//     } else {
//       next({// 校验失败，跳转至登录界面
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }// 将跳转的路由path作为参数，用于在登录成功后获取并跳转到该路径
//       });
//     }
//   } else {
//     next();// 不需要校验，直接跳转
//   }
// });

export default router;