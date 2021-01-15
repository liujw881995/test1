<template>
  <p>当前的 count 值为：{{ count }}</p>
  <button @click="increment">+1</button>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({ count: 0 });

    // 定义页面上可用的事件处理函数
    const increment = () => {
      state.count++;
    };

    // setup 函数中将响应式数据对象 return 出去，供 template 使用
    // 这个对象中可以包含响应式的数据，也可以包含事件处理函数
    return {
      // 将 state 上的每个属性，都转化为 ref 形式的响应式数据
      ...toRefs(state),
      increment,
    };
  },
};
</script>

<style>
</style>