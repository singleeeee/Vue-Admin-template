<script setup>
import { useCountStore } from '../../stores';
const countStore = useCountStore()

const onCountChange = (type) => {
  if (type === 'add') {
    countStore.setCount(countStore.count + 1)
  } else {
    countStore.setCount(countStore.count - 1)
  }
}

</script>

<template>
  <div class="container">
    <h1>Vue3 + Typescript + Vite</h1>
    <div>
      {{ countStore.count }}
      <el-button type="primary" @click="onCountChange('add')">+</el-button>
      <el-button type="primary" @click="onCountChange('minus')">-</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
