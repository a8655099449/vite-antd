import { createApp } from 'vue';
import App from './App.vue';
import router, { setupRouter } from '@/router';
import { setupStore } from '@/store';
import setupAntd from '@/plugins/antd';

import './global.less';

const app = createApp(App);
// router
setupRouter(app);
// store
setupStore(app);

// ui & global components & directives & other plugins

setupAntd(app);

router.isReady().then(() => {
  app.mount('#app');
});
