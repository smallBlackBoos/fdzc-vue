<script lang="ts" setup>
import { ref, watch } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const { currentRoute } = useRouter();

const breadcrumbItems = ref([]);

watch(
  () => currentRoute.value,
  (toRoute, fromRoute) => {
    // 通常，我们只需要toRoute.matched，因为它包含了当前路由及其所有父路由的信息
    toRoute.matched.splice(2, 1); // 去掉第2层路由
    toRoute.matched[1].path = "/department/dept/introduction"; // 手动修改第2层路由为，默认路由
    breadcrumbItems.value = toRoute.matched.map((item) => ({
      path: item.path,
      meta: item.meta || {}, // 确保meta存在，避免undefined
    }));
  },
  { immediate: true } // 立即执行一次回调函数
);
</script>

<template>
  <div class="common-layout">
    <div class="column_banner">
      <img src="../../assets/bg1.jpg" width="100%" />
      <div class="sub_info">
        <div class="column_name">
          <h2>本系简介</h2>
        </div>
        <div class="column_seat">
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item
              v-for="(item, i) in breadcrumbItems"
              :key="i"
              :to="{ path: item.path }"
            >
              {{ item.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>

    <el-container>
      <!-- 左侧菜单栏 -->
      <el-aside width="170px">
        <h2 class="mb-2">系部概况</h2>
        <el-menu
          :default-active="$router.currentRoute.value.path"
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

<style>
.el-breadcrumb__inner.is-link {
  font-weight: 500;
}
</style>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-weight: 500;
}

.el-container {
  width: 65%;
  margin: 80px auto;
}

.el-aside {
  border-top: 10px solid #015ca1;
}

/* 去掉左侧边栏的右边框 */
.el-menu {
  border-right: 0px;
  height: 186px;

  .el-sub-menu {
    height: 45px;
  }

  .el-menu-item {
    height: 45px;
  }
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
.el-menu-item:hover {
  color: #fff;
  background-color: #fa9d0a;
}

.el-main {
  padding-left: 60px;
}

.column_banner {
  width: 100%;
  position: relative;
}

.sub_info {
  width: 8.5rem;
  position: absolute;
  right: 514px;
  bottom: -19px;
}

.column_name {
  width: 600px;
  height: 62px;
  padding-right: 50px;
  line-height: 62px;
  background: linear-gradient(61deg, transparent 29px, #2980B9 29px, #0768B4 calc(100% - 29px)); 
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
}

.column_seat {
  width: 420px;
  font-size: 6px;
  height: 23px;
  padding-left: 230px;
  background: #e5e6e6;
  background: linear-gradient(61deg, transparent 40px, #e5e6e6 0) top right;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.el-breadcrumb {
  line-height: 23px;
  font-size: 12px;
}
</style>