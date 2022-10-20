<template>
  <div class="index">
    图表页面

    <Icon />
    <div ref="domRef" class="chart"></div>
  </div>
</template>
<script setup lang="ts">
  import Icon from '@/components/basic/Icon/Icon';
  import useG6Chart from '@/views/chart/useG6Chart';
  const { domRef } = useG6Chart();
</script>
<style lang="less" scoped>
  .chart {
    height: 500px;
    border: 1px solid #000;
  }
</style>
