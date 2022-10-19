import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import type { App } from 'vue';

export function setupStore(app: App<Element>) {
  const pinia = createPinia();
  pinia.use(piniaPersist);
  app.use(pinia);
}
