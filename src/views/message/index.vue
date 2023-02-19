<template>
  <div class="message">message</div>
  <input type="text" />
  <van-button type="primary" @click="fn">主要按钮</van-button>
</template>

<script lang="ts" name="MessagePage" setup>
import { getUserInfo } from '@/api/index';

const fn = (): void => {
  console.log(
    '==>api',
    getUserInfo({ a: 1 }).catch(error => {
      console.log('==>error', error);
    })
  );
};
//.......
</script>

<style lang="scss"></style>
