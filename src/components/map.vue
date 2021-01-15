<template>
  <div class="hello">
    <div id="chart" ref="chart" style="width=100%;height:500px"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china";
import axios from "axios";

import { reactive, toRefs, ref, onMounted } from "vue";
export default {
  setup() {
    //创建响应式数据对象
    const state = reactive({
      myChart: "",
      chart: ref(null),
      items: [],
    });

    const init = () => {
      var myChart = echarts.init(state.chart);

      var option = {
        title: {
          text: "疫情人员分布",
        },
        visualMap: {
          min: 1,
          max: 1000,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "城市名：{b}<br/>人员数{c}",
        },
        series: [
          {
            type: "map",
            map: "china",
            data: [
              { name: "新疆", value: 10 },
              { name: "西藏", value: 80 },
              { name: "陕西", value: 30 },
              { name: "北京", value: 700 },
            ], //数据
            label: {
              //文字
              show: true,
              color: "red",
            },
            itemStyle: {
              borderColor: "blue",
            },
            emphasis: {
              //高亮
              label: {
                //文字
                color: "#fff",
              },
              itemStyle: {
                borderColor: "green",
                areaColor: "green",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    };
    const getData = () => {
      //axios.get().then(res=>{
      //
      // })
    };
    onMounted(() => {
      init();
    });

    // console.log(props.msg)
    // console.log(context),
    //setup函数 将响应式数据对象返回出去 ， 供template使用
    return {
      //将state上的每个属性，转换为ref形式的响应式数据
      ...toRefs(state),
      // init
    };
  },
};
</script>

<style>
</style>