<template>
  <div class="layout">
    <van-nav-bar style="background: pink" title="标题" />
    <routerView>
      <template #default="{ Component, route }">
        <keep-alive :include="keepAliveList">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </template>
    </routerView>
    <van-tabbar placeholder route>
      <van-tabbar-item
        fixed
        replace
        v-for="menu in getMenus"
        :key="menu.name"
        :to="menu.path"
        :icon="(menu.meta?.icon as string)"
        >{{ menu.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" name="layout" setup>
import useRouteStoreWidthOut from '@/store/modules/route';

const routeStore = useRouteStoreWidthOut();

// 缓存路由
const keepAliveList = computed(() => routeStore.keepAliveList);

// 菜单
const getMenus = computed(() =>
  routeStore.menus.filter(item => {
    return !item.meta?.innerPage;
  })
);
</script>

<style lang="scss"></style>
