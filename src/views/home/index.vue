<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
  console.log('👴2022-10-19 18:33:49 index.vue line:7', router.options.routes);
  const name = 'home';
</script>
<template>
  <div class="index">
    {{ name }}

    <!-- <AButton v-for="item in 1000" :key="item">{{ item }}</AButton> -->
  </div>
</template>

<style lang="less" scoped>
  .index {
    color: red;
  }
</style>
