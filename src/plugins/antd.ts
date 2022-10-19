import 'ant-design-vue/dist/antd.css';
import Antd, { Button } from 'ant-design-vue';
import type { App } from 'vue';
const setupAntd = (app: App<Element>) => {
  app.use(Antd);
  // 注册全局组件
  app.component('AButton', Button);
};

export default setupAntd;
