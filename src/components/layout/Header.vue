<template>
  <div class="Header">
    <div></div>
    <div>
      <a-dropdown v-model:visible="visible">
        <a class="ant-dropdown-link" @click.prevent>
          <Avatar src="https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpeg"> </Avatar>
        </a>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="logout">退出登录</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { Avatar } from 'ant-design-vue';
  import { useUserStore } from '@/store/user';
  const visible = ref(false);

  const { logout } = useUserStore();

  const { replace } = useRouter();
  const handleMenuClick = async (e) => {
    switch (e.key) {
      case `logout`:
        await logout();
        replace('/login');
        break;

      default:
        break;
    }
  };

  // UserOutlined;
</script>
<style lang="less" scoped>
  .Header {
    display: flex;
    justify-content: space-between;
    height: 64px;
    align-items: center;
    padding-right: 20px;
  }
</style>
