<template>
  <!-- 将数据传入列表组件 -->
<ResourceList :resources="resources"/>

</template>

<script>

import ResourceList from '@/components/ResourceList.vue'
import {reactive,toRefs} from 'vue'
export default {
    name:'Bootstraptest',
    components:{
        ResourceList
    },

    setup(){
    const data = reactive({
          resources: [
            {
              _id: "1",
              title: "测试案例",
              description: "哈哈",
              type: "video",
              link: ""
            },
            {
              _id: "2",
              title: "Java",
              description: "java设计",
              type: "book",
              link: ""
            },
            {
              _id: "3",
              title: "python",
              description: "python学习",
              type: "video",
              link: ""
            },
            {
              _id: "4",
              title: "JavaScript",
              description: "web",
              type: "book",
              link: ""
            },
            {
              _id: "5",
              title: "go",
              description: "go语言",
              type: "video",
              link: ""
            },
            {
              _id: "6",
              title: "数据结构",
              description: "数据结构设计",
              type: "book",
              link: ""
            },
          ]
      })

      return { 
        // 解包
        ...toRefs(data)
        }

  }

      
}
</script>

<style>

</style>