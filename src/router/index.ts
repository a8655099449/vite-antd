import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';
import routes from '@/router/routes';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
