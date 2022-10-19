import type { RouteRecordRaw } from 'vue-router';

type RouteItem = RouteRecordRaw & {
  isMenu?: boolean; // 是否是菜单栏
};

const routes: Readonly<RouteItem[]> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: '首页',
    component: import('../views/home/index.vue'),
  },
  // 404页面
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: import('../components/NotFound/index.vue'),
  },
];

export default routes;
