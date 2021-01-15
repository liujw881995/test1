<template>
  <ctx></ctx>
  <Hh></Hh>
  <Reactive></Reactive>
</template>

<script>
import ctx from '../components/ctx'
import Hh from '@/components/hh.vue'
import Reactive from '@/components/reactive.vue'
export default {
    name: 'Test',
    setup(props,ctx){
        console.log('setup')
        console.log(ctx)
    },
    components:{
        ctx,
        Hh,
        Reactive
    }
}
</script>

<style>

</style>