<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const activeIndex = ref("/index");
const handleSelect = (key: string) => {
  router.push(key);
};
const router = useRouter();
// 返回顶部
const isFixed = ref(false);
const showBackToTop = ref(false);
const fixedName = ref(null);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 200;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// 访问外部网址
const goToWebsite = (website) => {
  window.location.href = website;
};
</script>

<template>
  <el-container class="page-container">
    <!-- header-line-->
    <el-row class="header-line"> </el-row>
    <el-affix :offset="0">
      <div class="page-header">
        <!-- Header -->
        <el-header class="header">
          <el-row class="header-row">
            <el-col :span="8" class="header-col">
              <img src="../assets/logo.png" alt="Logo" class="header-image" />
            </el-col>
            <el-col :span="13" class="header-col">
              <el-input
                placeholder="Search"
                prefix-icon="el-icon-search"
                class="header-search"
              />
            </el-col>
          </el-row>
        </el-header>
        <!-- Menu -->
        <el-row>
          <el-col :span="24">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              text-color="#287FB9"
              background-color="#fff"
              active-text-color="#ffd04b"
              @select="handleSelect"
            >
              <el-menu-item index="/index/info">首页</el-menu-item>
              <el-sub-menu index="/department">
                <template #title>系部概况</template>
                <el-menu-item index="/department/dept/details/101" exact>本系简介</el-menu-item>
                <el-menu-item index="/department/dept/details/102" exact>领导简介</el-menu-item>
                <el-menu-item index="/department/dept/speciality" exact>专业设置</el-menu-item>
                <el-menu-item index="/department/dept/details/104" exact>十年成果展</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="/news">
                <template #title>新闻中心</template>
                <el-menu-item index="/news/n/4" exact>通知公告</el-menu-item>
                <el-menu-item index="/news/n/5" exact>最新动态</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="/party_building">
                <template #title>党建专栏</template>
                <el-menu-item index="/party_building/pb/6" exact>党规党纪</el-menu-item>
                <el-menu-item index="/party_building/pb/7" exact>通知公告</el-menu-item>
                <el-menu-item index="/party_building/pb/8" exact>荣誉展示</el-menu-item>
                <el-menu-item index="/party_building/pb/9" exact>主题党日活动</el-menu-item>
                <el-menu-item index="/party_building/pb/10" exact>榜样标兵</el-menu-item>
                <el-menu-item index="/party_building/pb/details/11" exact>二十大专题学习</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="/discipline_con">
                <template #title>学科建设</template>
                <el-menu-item index="/discipline_con/dc/12" exact>本科培养</el-menu-item>
                <el-menu-item index="/discipline_con/dc/13" exact>专升本培养</el-menu-item>
                <el-menu-item index="/discipline_con/dc/14" exact>实践教学</el-menu-item>
                <el-menu-item index="/discipline_con/dc/15" exact>质量工程</el-menu-item>
                <el-menu-item index="/discipline_con/dc/details/16" exact>办学成果</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="6">
                <template #title>师资队伍</template>
                <el-menu-item index="6.1" exact>师资信息</el-menu-item>
                <el-menu-item index="6.2" exact>学科带头人</el-menu-item>
                <el-menu-item index="6.2" exact>辅导员简介</el-menu-item>
                <el-menu-item index="6.2" exact>行政人员简介</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="7">
                <template #title>教务管理</template>
                <el-menu-item index="7.1" exact>本科培养</el-menu-item>
                <el-menu-item index="7.2" exact>专升本培养</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="8">规章制度</el-menu-item>
              <el-sub-menu index="9">
                <template #title>学生工作</template>
                <el-menu-item index="9.1" exact>团学工作</el-menu-item>
                <el-menu-item index="9.2" exact>学科竞赛</el-menu-item>
                <el-menu-item index="9.3" exact>考研动态</el-menu-item>
                <el-menu-item index="9.4" exact>敏学大讲堂</el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="10">
                <template #title>办事指南</template>
                <el-menu-item index="10.1" exact>教务指南</el-menu-item>
                <el-menu-item index="11.1" exact>表格下载</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-affix>
    <!-- Main -->
    <el-main class="main-content">
      <!-- <el-main class="main-content"> -->
      <!-- 路由放置位置-->
      <router-view></router-view>
    </el-main>
    <!--Footer-->
    <el-footer class="footer">
      <!-- 第一行 -->
      <el-row class="footer-row">
        <!-- 第一列 -->
        <el-col :span="20">
          <img src="../assets/logo.png" alt="Logo" class="header-image" />
        </el-col>
      </el-row>

      <!-- 第二行 -->
      <el-row>
        <!-- 第一列 -->
        <el-col>
          <button
            class="custom-button light"
            @click="goToWebsite('https://www.fdzcxy.edu.cn/')"
          >
            学院官网
          </button>
          <button
            style="margin: 15px"
            class="custom-button light"
            @click="goToWebsite('https://zsb.fdzcxy.edu.cn/')"
          >
            招生办
          </button>
        </el-col>
        <!-- 第二列 -->
        <el-col> 地址：福州鼓楼区杨桥西路50号福州大学至诚学院 </el-col>
        <!-- 第三列 -->
        <el-col> 邮箱：123456@gmail.com </el-col>
      </el-row>

      <!-- 第三行，与第二行结构相同 -->
      <el-row>
        <el-col>
          <img
            src="../assets/ygzh.jpg"
            alt=""
            style="height: 100px; margin-bottom: 10px"
          />
        </el-col>
        <el-col> 院微信公众号 </el-col>
      </el-row>
      <el-row>
        <el-col>
          <img
            src="../assets/xgzh.jpg"
            alt=""
            style="height: 100px; padding-right: 20px; margin-bottom: 10px"
          />
        </el-col>
        <el-col> 系微信公众号 </el-col>
      </el-row>
    </el-footer>
    <!-- 返回顶部的按钮 -->
    <el-button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="back-to-top"
      type="primary"
    >
      返回顶部
    </el-button>
  </el-container>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;
}

.page-header {
  z-index: 1000; /* Ensure header is above other content */
}

.el-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(to right, #2980b9, #0768b4);
  padding: 20px;
  height: 150px;
}

.header-line {
  height: 5px;
  background-color: #ffd04b;
}

.header-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.header-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-image {
  max-width: 100%;
  height: auto;
  max-height: 100px;
}

.header-search {
  width: 100%;
  max-width: 400px;
  margin-left: auto;
}

/* Sticky Menu */
.menu {
  position: sticky;
  top: 150px;
  z-index: 999;
  background-color: #fff;
}

.el-menu {
  height: 50px;

  .el-sub-menu,
  .el-menu-item {
    height: 50px;
  }
}

.el-header {
  --el-header-padding: 0px;
}

.el-menu-demo {
  align-items: center;
  justify-content: center;
  border-bottom: 0;
}

.main-content {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100%;
}

.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #d3dce6;
  height: 200px;
  background: linear-gradient(to right, #2980b9, #0768b4);
}

.el-main {
  padding: 0;
}
.custom-button {
  background-color: #f0f0f0; /* 浅色背景 */
  border: none;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.3s ease; /* 渐变效果 */
  font-size: 16px;
  color: #015ca1;
  font-weight: bold;
}

.custom-button.light:hover {
  background-color: #e0e0e0; /* 鼠标悬停时浅色变浅 */
}
/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 50px;
  right: 50px;
  padding: 10xp 20px;
  border: none;
  background: linear-gradient(to right, #2980b9, #0768b4);
  color: white;
  font-size: 16px;
  //display: none;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  transition: transform 0.3s ease; /* 添加 transform 过渡 */
}

.back-to-top:hover {
  transform: scale(1.1); /* 悬停时放大 */
}
</style>

