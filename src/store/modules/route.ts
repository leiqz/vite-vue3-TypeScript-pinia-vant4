import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
import { store } from '@/store';

export interface IRouteState {
  menus: RouteRecordRaw[];
  routers: RouteRecordRaw[];
  keepAliveList: string[];
}

export const useRouteStore = defineStore({
  id: 'app-route',
  state: (): IRouteState => ({
    menus: [],
    routers: [],
    keepAliveList: []
  }),
  getters: {
    getMenus(): RouteRecordRaw[] {
      return this.menus;
    }
  },
  actions: {
    setRouters(routers: RouteRecordRaw[]) {
      this.routers = routers;
    },
    setMenus(menus: RouteRecordRaw[]) {
      this.menus = menus;
    },
    setKeepAliveList(compNames: string[]) {
      // 设置需要缓存的组件
      this.keepAliveList = compNames;
    }
  }
});

const useRouteStoreWidthOut = () => useRouteStore(store);

export default useRouteStoreWidthOut;
