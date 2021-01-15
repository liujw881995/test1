<template>
  <h1>{{ state }}</h1>
  <h3>{{ count }}</h3>
  <button @click="myFun2">加1</button>
</template>

<script>
import { onMounted, ref, watch } from "vue";
export default {
  setup() {
    const state = ref(0);

    const count = ref(0);

    // 定义 watch，只要 count 值变化，就会触发 watch 回调
    // watch 会在创建时会自动调用一次
    watch(() => console.log(count.value));
    // 输出 0

    setTimeout(() => {
      count.value++;
      // 输出 1
    }, 2000);

    onMounted(() => {
      console.log(state.value);
    });
    function myFun2() {
      // console.log(state.value+1)
      // 如果要访问 ref() 创建出来的响应式数据对象的值，必须通过 .value 属性才可以
      state.value += 1;
    }

    return {
      state,
      myFun2,
      count,
    };
  },
};
</script>

<style>
</style>