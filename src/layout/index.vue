<script lang='ts' setup>
import LayoutAside from '@/components/layout/aside.vue'
</script>

<template>
  <el-container class="common-layout">
    <el-header class="header"></el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <layout-aside />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.common-layout {
  min-height: 100vh;

  .header {
    background-color: #409eff;
  }

  .aside {
    background-color: aqua;
  }
}
</style>