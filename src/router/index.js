
export default [
  {
    name: 'Index',
    path: '/',
    redirect: {name: 'index'}
  },
  {
    meta: {
      name: 'index page',
    },
    name: 'index',
    path: '/',
    component: resolve => require(['../views/index.vue'], resolve)
  },
  {
    meta: {
      name: 'video page',
    },
    name: 'video',
    path: '/video',
    component: resolve => require(['../views/video/video.vue'], resolve)
  },
  {
    path: '*',
    meta: {
      noRequestApprove: true
    },
    component: resolve => require(['../views/error/404'], resolve)
  }
];
