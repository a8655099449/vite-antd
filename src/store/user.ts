import { defineStore } from 'pinia';
import { message } from 'ant-design-vue';
import storageTool from '@/utils/Storage';
import { pinia } from '@/store';
import { confirm } from '@/utils';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isLogin: false,
    name: '',
    isFirstCheck: false,
  }),
  actions: {
    login({ acc, pwd }: { acc: string; pwd: string }) {
      if (acc === 'admin' && pwd === '123456') {
        this.name = acc;
        this.isLogin = true;
        storageTool.set('user', { name: acc });
        message.success('登录成功');
        return true;
      }
      message.error('账号密码错误');
      return false;
    },
    /* 确认是否登录 */
    checkLogin() {
      const user = storageTool.get<UserProfile>('user');
      if (user && user.name) {
        this.isFirstCheck = true;
        this.isLogin = true;
        this.name = user.name;
      }
    },
    async logout() {
      await confirm({
        title: '退出登录',
        content: '是否确认退出登录',
      });
      this.isLogin = false;
      this.name = '';
      storageTool.remove('user');
      message.success('已退出登录');
    },
  },
});

// 在组件setup函数外使用
export function useUserStoreWithOut() {
  return useUserStore(pinia);
}
