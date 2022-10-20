<template>
  <div class="layout">
    <Layout
      :style="{
        height: '100vh',
      }"
    >
      <LayoutSider v-model:collapsed="collapsed" collapsible :width="120" :collapsed-width="60">
        <div class="logo">
          <img src="../../assets/vue.svg" alt="" />
        </div>
        <Menu :selected-keys="selectedKeys" theme="dark" mode="inline" @select="handleMenuChange">
          <a-menu-item v-for="item in menus" :key="item.path">
            <Icon :type="item.icon" />
            <span class="name">{{ item.name }}</span>
          </a-menu-item>
        </Menu>
      </LayoutSider>
      <Layout>
        <LayoutHeader class="header">
          <Header />
        </LayoutHeader>
        <LayoutContent
          :style="{
            margin: '10px ',
            padding: '10px',
            background: '#fff',
            'max-height': 'calc(100vh - 20px)',
            'overflow-y': 'auto',
          }"
        >
          <RouterView />
        </LayoutContent>
      </Layout>
    </Layout>
  </div>
</template>
<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
  import { Layout, LayoutSider, LayoutContent, Menu, LayoutHeader } from 'ant-design-vue';
  import Header from './Header.vue';
  import type { RouteItem } from '@/router/routes';
  import type { SelectInfo } from 'ant-design-vue/lib/menu/src/interface';
  import Icon from '@/components/basic/Icon/Icon';

  const { options, push } = useRouter();
  const { path } = useRoute();
  const selectedKeys = ref([path]);
  const collapsed = ref<boolean>(true);

  const menus = computed(() => {
    return options.routes?.[0]?.children?.filter(
      (item: RouteItem) => item.component && item.isMenu,
    ) as RouteItem[];
  });
  const handleMenuChange = (e: SelectInfo) => {
    push(e.key as string);
  };
  onBeforeRouteUpdate((to) => {
    selectedKeys.value = [to.path];
  });
</script>
<style lang="less" scoped>
  .logo {
    color: #fff;
    text-align: center;
  }

  .header {
    background-color: #fff;
    padding: 0;
  }
</style>
