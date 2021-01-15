<template>
  <h1>1111</h1>
  <h2>{{ state.count }}</h2>
  <van-image width="100" height="100" :src="require('../assets/logo.png')" />
  <van-swipe :autoplay="3000">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
</van-swipe>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
export default {
  name: "ctx",
  setup(props, ctx) {
    console.log(ctx);

    const count = ref(0);
    const state = reactive({
      count,
    });
    // const img = reactive({
    //   images: [
    //     'https://img.yzcdn.cn/vant/apple-1.jpg',
    //     'https://img.yzcdn.cn/vant/apple-2.jpg',
    //   ],
    // })

    console.log(state.count);
    return {
      count,
      state,
      // ...toRefs(img)
    };
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>