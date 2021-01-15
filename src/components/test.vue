<template>
  <p>{{ name }}</p>
  <h1>{{ id }}</h1>
  <button @click="change()">click</button>

  <a-button type="primary"> Primary </a-button>
  <a-button>Default</a-button>
  <a-button type="dashed"> Dashed </a-button>
  <a-button type="danger"> Danger </a-button>
  <a-config-provider :auto-insert-space-in-button="false">
    <a-button type="primary"> 按钮 </a-button>
  </a-config-provider>
  <a-button type="primary"> 按钮 </a-button>
  <a-button type="link"> Link </a-button>
</template>

<script>
import { reactive, computed, toRefs, onMounted } from "vue";
import { Button } from "ant-design-vue";

export default {
  setup(props) {

    //   console.log("djsajd"+root)
    //创建响应式数据对象
    const state = reactive({
      name: "dsajj",
      id: 100,
    });
    const change = () => {
      // console.log('121')
      return (state.id += 1);
    };
    // console.log(props.msg)
    // console.log(context),
    //setup函数 将响应式数据对象返回出去 ， 供template使用
    return {
      ...toRefs(state),
      change,
    };
  },
};
</script>

<style>
</style>