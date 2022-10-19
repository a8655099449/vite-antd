import type { RouteItem } from '@/router/routes';

const layoutRoutes: Readonly<RouteItem[]> = [
  {
    path: '/home',
    name: '首页',
    component: import('../views/home/index.vue'),
  },
];

export default layoutRoutes;
