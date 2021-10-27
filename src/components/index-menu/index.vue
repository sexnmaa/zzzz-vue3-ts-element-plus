<template>
  <div class="index-menu">
    <div class="menu-header">
      <img class="menu-header-img" src="~@/assets/images/logo.svg" alt="" />
      <span>Vue3+TS</span>
    </div>
    <div class="menu-list">
      <el-menu
        class="el-menu-vertical"
        default-active="2"
        :collapse="collapse"
        background-color="#0c2135"
        text-color="#b7bdc3"
        active-text-color="#0a60bd"
      >
        <template v-for="item in roleList" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
      <!-- <el-col :span="34">
          <h5>Default colors</h5>
          <el-menu
          >
            <el-sub-menu index="1">
              <template #title>
                <i class="el-icon-location"></i>
                <span>Navigator One</span>
              </template>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row> -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const roleList = computed(() => store.state.login.roleList)
    console.log(roleList)

    return {
      roleList
    }
  }
})
</script>

<style scoped lang="less">
.index-menu {
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 10px 8px 10px;
    img {
      height: 28px;
    }
    span {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
