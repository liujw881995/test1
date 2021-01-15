<template>
  <h2>List</h2>
  <h3>未选中的列表</h3>
  <ul class="list-group">
    <template v-for="(item, index) in lists">
      <li
        class="list-group-item"
        
        :key="index"
        @click="() => (item.checked = !item.checked)"
        v-if="!item.checked"
      >
        <div class="form-group form-check" >
          <input
            type="checkbox"
            class="form-check-input"
            :id="'item-' + index"
            v-model="item.checked"
          />
          <label class="form-check-label" :for="'item-' + index">
            {{ item.name }}
          </label>
        </div>
      </li>
    </template>
  </ul>
  <h3>已选中的列表</h3>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(item, index) in finished"
      :key="'finished-' + index"
    >
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          :id="'finished-' + index"
          disabled
          v-model="item.checked"
        />
        <label class="form-check-label" :for="'finished-' + index">
          {{ item.name }}
        </label>
      </div>
    </li>
  </ul>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  name: "toList",
  setup() {
    
    const state = reactive({
      lists: [
        {
          name: "1",
          checked: false, 
        },
        {
          name: "2",
          checked: false,
        },
        {
          name: "3",
          checked: false,
        },
      ],
      finished: computed(() =>
        state.lists.filter((item) => item.checked == true)
      ),
    });
    return toRefs(state);
  },
};
</script>

<style>
</style>