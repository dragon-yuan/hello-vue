
export default [
  {
    name: 'Index',
    path: '/',
    redirect: {name: 'Hello'}
  },
  {
    meta: {
      name: 'VUE',
    },
    name: 'Hello',
    path: '/',
    component: resolve => require(['../views/Hello.vue'], resolve)
  },
  {
    path: '*',
    meta: {
      noRequestApprove: true
    },
    component: resolve => require(['../views/error/404'], resolve)
  }
];
