import { createRouter, createWebHistory, Router } from 'vue-router';
import { message } from 'ant-design-vue';
import type { App } from 'vue';
import routes from '@/router/routes';
import { useUserStore } from '@/store/user';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export function setupRouter(app: App<Element>) {
  createRouterGuards(router);
  app.use(router);
}

// 创建路由守卫
const createRouterGuards = (router: Router) => {
  router.beforeEach((to, _, next) => {
    const { checkLogin, isFirstCheck } = useUserStore();
    if (!isFirstCheck) {
      checkLogin();
    }
    const { isLogin } = useUserStore();

    // 如果没有登录则去登录
    if (to.path !== '/login' && !isLogin) {
      message.info('请先登录');

      next({
        path: '/login',
        replace: true,
      });
    } else {
      if (to.path === '/login' && isLogin) {
        next({
          path: '/',
          replace: true,
        });
      } else {
        next();
      }
    }
  });
};

export default router;
