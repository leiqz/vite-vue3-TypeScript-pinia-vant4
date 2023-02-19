<script setup lang="ts">
import useRouteStoreWidthOut from '@/store/modules/route';
const routeStore = useRouteStoreWidthOut();
// 需要缓存的路由
const keepAliveList = computed(() => routeStore.keepAliveList);
</script>

<template>
  <routerView v-slot="{ Component }">
    <keep-alive :include="keepAliveList">
      <component :is="Component" />
    </keep-alive>
  </routerView>
</template>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
