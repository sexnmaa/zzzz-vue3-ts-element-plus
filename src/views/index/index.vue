<template>
  <div class="container">
    <el-container class="el-container">
      <el-aside width="210px" class="el-aside">
        <index-menu></index-menu>
      </el-aside>
      <el-container class="el-con">
        <el-header class="el-header">Header</el-header>
        <el-main class="el-main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IndexMenu from '@/components/index-menu/index.vue'

export default defineComponent({
  components: {
    IndexMenu
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
    .el-aside {
      height: 100%;
      background-color: #001529;
    }
    .el-con {
      .el-header {
        height: 48px;
      }
      .el-main {
        color: #333;
        text-align: center;
        background-color: #f0f2f5;
      }
    }
  }
}
</style>
