<template>
  <div class="page-container">
    <div class="text-center">
      <img src="@/assets/icons/404.svg" alt="" />
    </div>
    <div class="text-center">
      <h1 class="text-base text-gray-500">抱歉，你访问的页面不存在</h1>
      <van-button type="primary" @click="goHome">回到首页</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const goHome = () => router.push('/');
</script>

<style lang="scss" scoped>
.page-container {
  height: 100%;
  .text-center {
    font-size: 12px;
    text-align: center;
    h1 {
      color: #666;
      padding: 20px 0;
    }
  }
  img {
    width: 100%;
  }
}
</style>
