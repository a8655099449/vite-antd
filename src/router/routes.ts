import type { RouteRecordRaw } from 'vue-router';
import layoutRoutes from '@/router/layoutRoutes';

export type RouteItem = RouteRecordRaw & {
  isMenu?: boolean; // 是否是菜单栏
  icon?: string;
};

const routes: Readonly<RouteItem[]> = [
  {
    path: '/',
    component: import('../components/Layout/Layout.vue'),
    children: layoutRoutes as any,
  },
  {
    path: '/login',
    component: import('../views/login/index'),
  },

  // 404页面
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: import('../components/NotFound/index.vue'),
  },
];

export default routes;
