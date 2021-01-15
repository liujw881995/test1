<template>
  <div id="echart" ref="echart" style="width=70%;height:500px"></div>
</template>

<script>
import echarts from "echarts";

import { reactive, toRefs, ref, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      echart: ref(null),
      mychart: "",
      // data: [],
    });
    const init = () => {
      var myChart = echarts.init(state.echart);
      var option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 500],
            type: "bar",
          },
        ],
      };
      myChart.setOption(option);
    };
    onMounted(() => {
      init();
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>