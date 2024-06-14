<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧菜单栏 -->
      <el-aside width="200px">
        <h2 class="mb-2">系部概况</h2>
        <el-menu
          :default-active="router.currentRoute.value.path"
          background-color="#f6f6f6"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/department/dept/introduction">
            <span>本系简介</span>
          </el-menu-item>
          <el-menu-item index="/department/dept/leadership">
            <span>领导简介</span>
          </el-menu-item>
          <el-menu-item index="/department/dept/profession">
            <span>专业设置</span>
          </el-menu-item>
          <el-menu-item index="/department/dept/achievement">
            <span>十年成果展</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 右侧内容面板 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  font-weight: 500;
}

/* .common-layout {
    width: 70%;
    margin: 0 auto;
} */

.el-aside {
  border-top: 10px solid #015ca1;
}

/* 菜单栏中文字居中 */
.el-menu-item * {
    margin: 0 auto;
}

/* 菜单选中时样式 */
.is-active {
    color: #fff;
    background-color: #fa9d0a;
}

/* 鼠标悬停时样式 */
.el-menu-item:hover{
    color: #fff;
    background-color: #fa9d0a;
}
</style>