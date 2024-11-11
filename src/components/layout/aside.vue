<script setup>
import {
  Odometer,
  SwitchButton
} from '@element-plus/icons-vue'

const routers = [
  {
    path: '/',
    icon: Odometer,
    name: '一级菜单',
    children: [
      {
        path: '/dashboard',
        name: '公告板'
      },
      {
        path: '/hello',
        name: 'hello'
      }
    ]
  },
  {
    icon: SwitchButton,
    path: '/login',
    name: '登录'
  }
]
</script>

<template>
  <div class="container">
    <el-menu
      class="menu"
      default-active="1"
    >
      <template v-for="item in routers">
        <!-- 二级路由 -->
        <el-sub-menu
          v-if="item.children"
          :key="item.path"
          :index="item.path"
        >
          <template #title>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <router-link
            v-for="child in item.children"
            :key="child.path"
            :to="child.path"
          >
            <el-menu-item :index="child.path">
              {{ child.name }}
            </el-menu-item>
          </router-link>
        </el-sub-menu>

        <!-- 一级路由 -->
        <router-link
          v-else
          :key="item"
          :to="item.path"
        >
          <el-menu-item :index="item.path">
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </router-link>
      </template>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  .menu {
    width: 100%;
  }
}
</style>
