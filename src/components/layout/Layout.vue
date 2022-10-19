<template>
  <div class="layout">
    <Layout
      :style="{
        height: '100vh',
      }"
    >
      <LayoutSider v-model:collapsed="collapsed" collapsible>
        <div class="logo">logo</div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <user-outlined />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </LayoutSider>
      <Layout>
        <LayoutContent
          :style="{
            margin: '10px ',
            padding: '10px',
            background: '#fff',
            height: 'calc(100vh - 20px)',
            'overflow-y': 'scroll',
          }"
        >
          <slot></slot>
        </LayoutContent>
      </Layout>
    </Layout>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import {
    Layout,
    LayoutSider,
    LayoutContent,
    // LayoutHeader,
  } from 'ant-design-vue';

  const selectedKeys = ref(['0']);
  const collapsed = ref<boolean>(true);
</script>
<style lang="less" scoped>
  .logo {
    color: #fff;
    text-align: center;
  }
</style>
