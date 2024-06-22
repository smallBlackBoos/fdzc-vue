<!-- 师资队伍 -->

<script setup>
import { ref, watch } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import router from "@/router";
const { currentRoute } = useRouter();
// const router = useRouter();

// 左侧菜单栏数据
const menu = ref([
  { path: "/teachers/t/501", meta: "师资信息" },
  { path: "/teachers/t/502", meta: "学科带头人" },
  { path: "/teachers/t/503", meta: "辅导员简介" },
  { path: "/teachers/t/504", meta: "行政人员简介" }
]);

const breadcrumbItems = ref([]);
const currentType = ref("");  // 当前选中的类型（路径）

watch(
  () => currentRoute.value,
  (toRoute, fromRoute) => {
    let articleType = router.currentRoute.value.params.articleType; // 获取路径参数
    menu.value.forEach((item) => {
      const match = item.path.match(/\/(\d+)$/); // 匹配最后一个斜杠后面的数字
      if (match && match[1] === articleType.toString()) {
        toRoute.matched[2].path = "/teachers/t/" + articleType;
        toRoute.matched[2].meta.title = item.meta;
      }
    });

    // 通常，我们只需要toRoute.matched，因为它包含了当前路由及其所有父路由的信息
    toRoute.matched[1].path = "/teachers/t/18"; // 手动修改第2层路由为，默认路由
    breadcrumbItems.value = toRoute.matched.map((item) => ({
      path: item.path,
      meta: item.meta || {}, // 确保meta存在，避免undefined
    }));

    currentType.value = breadcrumbItems.value[2].path
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
          <h2>师资队伍</h2>
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
      <!-- :default-active="$router.currentRoute.value.path" -->
      <el-aside width="170px">
        <h2 class="mb-2">师资队伍</h2>
        <el-menu
          :default-active="currentType"
          background-color="#f6f6f6"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item v-for="item in menu" :key="item" :index="item.path">
            <span>{{ item.meta }}</span>
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

<!-- 这个标签得写在style中才有用 -->
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

/* 左侧菜单栏 */
.el-menu {
  border-right: 0px; /* 去掉左侧边栏的右边框 */
  height: 186px;

  .el-sub-menu {
    height: 45px;
  }

  .el-menu-item {
    height: 45px;
  }

  /* 菜单栏中文字居中 */
  .el-menu-item * {
    margin: 0 auto;
  }

  /* 鼠标悬停时样式 */
  .el-menu-item:hover {
    color: #fff;
    background-color: #fa9d0a;
  }
}

/* 菜单选中时样式 */
.is-active {
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
  background: linear-gradient(
    61deg,
    transparent 29px,
    #2980b9 29px,
    #0768b4 calc(100% - 29px)
  );
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