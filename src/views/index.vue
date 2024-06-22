<script lang="ts" setup>
import {ref, onMounted, onUnmounted} from "vue";
import {useRouter} from "vue-router";

const activeIndex = ref("/index");
const handleSelect = (key: string) => {
    router.push(key);
};
const router = useRouter();
// 返回顶部
const showBackToTop = ref(false);
const isFixed = ref(false);  // 默认关闭吸顶效果
// const fixedName = ref(null);
const menu = ref(0);        // 导航条距离文档顶部的位置
// 导航条样式（默认样式为白底蓝字）
const menuStyle = ref({
  textColor: '#287FB9',
  backgroundColor: '#fff',
});  
const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
};

const handleScroll = () => {
  if (window.scrollY > menu.value) {
    showBackToTop.value = true;
    isFixed.value = true; // 开启导航条吸顶效果
    // 导航条样式变为蓝底白字
    menuStyle.value = {
      textColor: '#fff',
      backgroundColor: '#287FB9',
    }
  } else {
    showBackToTop.value = false;
    isFixed.value = false; // 关闭导航条吸顶效果
    // 导航条样式变为白底蓝字
    menuStyle.value = {
      textColor: '#287FB9',
      backgroundColor: '#fff',
    }
  }
};

// 获取元素在页面中的位置（相对于文档顶部）
function getOffsetTop(element) {  
    var top = 0;  
    do {  
        top += element.offsetTop || 0;  
        element = element.offsetParent;  
    } while (element);  
    return top;  
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  let navBar = document.querySelector('.el-menu');    // 获取导航条
  menu.value = getOffsetTop(navBar);  // 得到导航条距离文档顶部的位置
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
                :class="{'el-menu-demo': true, 'fixed-menu': isFixed}"
                mode="horizontal"
                :text-color="menuStyle.textColor"
                :background-color="menuStyle.backgroundColor"
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
                  <el-menu-item index="/news/n/201" exact>通知公告</el-menu-item>
                  <el-menu-item index="/news/n/202" exact>最新动态</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/party_building">
                  <template #title>党建专栏</template>
                  <el-menu-item index="/party_building/pb/301" exact>党规党纪</el-menu-item>
                  <el-menu-item index="/party_building/pb/302" exact>通知公告</el-menu-item>
                  <el-menu-item index="/party_building/pb/303" exact>荣誉展示</el-menu-item>
                  <el-menu-item index="/party_building/pb/304" exact>主题党日活动</el-menu-item>
                  <el-menu-item index="/party_building/pb/305" exact>榜样标兵</el-menu-item>
                  <el-menu-item index="/party_building/pb/306" exact>二十大专题学习</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/discipline_con">
                  <template #title>学科建设</template>
                  <el-menu-item index="/discipline_con/dc/401" exact>本科培养</el-menu-item>
                  <el-menu-item index="/discipline_con/dc/402" exact>专升本培养</el-menu-item>
                  <el-menu-item index="/discipline_con/dc/403" exact>实践教学</el-menu-item>
                  <el-menu-item index="/discipline_con/dc/404" exact>质量工程</el-menu-item>
                  <el-menu-item index="/discipline_con/dc/details/405" exact>办学成果</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="teachers">
                  <template #title>师资队伍</template>
                  <el-menu-item index="/teachers/t/501" exact>师资信息</el-menu-item>
                  <el-menu-item index="/teachers/t/502" exact>学科带头人</el-menu-item>
                  <el-menu-item index="/teachers/t/503" exact>辅导员简介</el-menu-item>
                  <el-menu-item index="/teachers/t/504" exact>行政人员简介</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/educational">
                  <template #title>教务管理</template>
                  <el-menu-item index="/educational/e/601" exact>教务信息</el-menu-item>
                  <el-menu-item index="/educational/e/602" exact>教学研讨</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/rules/r/701">规章制度</el-menu-item>
                <el-sub-menu index="/student_work">
                  <template #title>学生工作</template>
                  <el-menu-item index="/student_work/s/801" exact>团学工作</el-menu-item>
                  <el-menu-item index="/student_work/s/details/802" exact>学科竞赛</el-menu-item>
                  <el-menu-item index="/student_work/s/803" exact>考研动态</el-menu-item>
                  <el-menu-item index="/student_work/s/804" exact>敏学大讲堂</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/service_guide">
                  <template #title>办事指南</template>
                  <el-menu-item index="/service_guide/sg/901" exact>教务指南</el-menu-item>
                  <el-menu-item index="/service_guide/sg/902" exact>表格下载</el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row>
      </div>
    
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
                  <img src="../assets/logo.png" alt="Logo" class="header-image"/>
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
                  <button
                          class="custom-button light"
                          @click="goToWebsite('https://www.720yun.com/vr/1b1jOseavO5')"
                  >
                      校园全景
                  </button>
              </el-col>
              <!-- 第二列 -->
              <el-col> 地址：福州鼓楼区杨桥西路50号福州大学至诚学院</el-col>
              <!-- 第三列 -->
              <el-col>Copyright 福州大学至诚学院计算机工程系 All Rights Reserved.</el-col>
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
              <el-col> 院微信公众号</el-col>
          </el-row>
          <el-row>
              <el-col>
                  <img
                          src="../assets/xgzh.jpg"
                          alt=""
                          style="height: 100px; padding-right: 20px; margin-bottom: 10px"
                  />
              </el-col>
              <el-col> 系微信公众号</el-col>
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
    max-width: 300px;
    margin-left: auto;
    margin-right: 30px;
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
    bottom: 20px;
    right: 20px;
    padding: 10xp 20px;
    border: none;
    background: linear-gradient(to right, #2980B9, #0768B4);
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

// 导航栏吸顶效果
.fixed-menu {  
  position: fixed;  
  top: 0;  
  left: 0;  
  width: 100%;  
  z-index: 1000; /* 确保菜单在其他内容之上 */  
} 
</style>

