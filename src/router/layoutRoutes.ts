import type { RouteItem } from '@/router/routes';

const layoutRoutes: Readonly<RouteItem[]> = [
  {
    path: '/home',
    name: '首页',
    component: import('../views/home/index.vue'),
    isMenu: true,
    icon: 'home',
  },
  {
    path: '/chart',
    name: '图表',
    component: import('../views/chart/index.vue'),
    isMenu: true,
  },
  {
    path: '/chart2',
    name: '图表2',
    component: import('../views/chart2/index.vue'),
    isMenu: true,
  },
  {
    path: '/',
    redirect: '/home',
  },
];

export default layoutRoutes;
