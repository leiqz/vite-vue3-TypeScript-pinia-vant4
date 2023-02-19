import { Router } from 'vue-router';
import dynamicRoutes from '@/store/modules/route';

export function createRouterGuards(router: Router): void {
  // 路由全局拦截
  router.beforeEach(async (to, from, next) => {
    //......
    next();
  });
  // 进入某个路由之后触发的钩子
  router.afterEach(to => {
    document.title = (to?.meta?.title as string) || document.title || '';
    const routeStore = dynamicRoutes();
    const keepAliveList = routeStore.keepAliveList;
    // 获取当前组件名
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentComName: any = to.matched.find(item => item.name === to.name)?.name;
    if (currentComName && !keepAliveList.includes(currentComName) && to.meta?.keepAlive) {
      // 需要缓存的组件
      keepAliveList.push(currentComName);
    } else if (!to.meta?.keepAlive) {
      // 不需要缓存的组件
      const index = routeStore.keepAliveList.findIndex(name => name === currentComName);
      if (index !== -1) {
        // 通过返回具体下标位置删除 keepAliveList 数组中缓存的 元素
        keepAliveList.splice(index, 1);
      }
    }
    routeStore.setKeepAliveList(keepAliveList);
  });
}
