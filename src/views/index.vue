<script lang="ts" setup>
import {ref,onMounted} from 'vue'
import {useRouter} from "vue-router";

const activeIndex = ref('/index')
const handleSelect = (key: string) => {
    router.push(key);
}

const router = useRouter()
</script>

<template>
    <div class="page-container">
        <!--header-line-->
        <el-row class="header-line">
        </el-row>
        <!-- Header -->
        <el-header class="header">
            <el-row class="header-row">
                <el-col :span="8" class="header-col">
                    <img src="../assets/logo.png" alt="Logo" class="header-image"/>
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
        <el-row class="memu">
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
                            <el-menu-item index="/department/dept/introduction" exact>本系简介</el-menu-item>
                            <el-menu-item index="/department/dept/leadership" exact>领导简介</el-menu-item>
                            <el-menu-item index="/department/dept/profession" exact>专业设置</el-menu-item>
                            <el-menu-item index="/department/dept/achievement" exact>十年成果展</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="/news">
                            <template #title>新闻中心</template>
                            <el-menu-item index="/news/n/announcements" exact>通知公告</el-menu-item>
                            <el-menu-item index="/news/n/latestNews" exact>最新动态</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="/party_building">
                            <template #title>党建专栏</template>
                            <el-menu-item index="/party_building/pb/rules" exact>党规党纪</el-menu-item>
                            <el-menu-item index="/party_building/pb/pbAnnouncements" exact>通知公告</el-menu-item>
                            <el-menu-item index="/party_building/pb/honor" exact>荣誉展示</el-menu-item>
                            <el-menu-item index="/party_building/pb/events" exact>主题党日活动</el-menu-item>
                            <el-menu-item index="/party_building/pb/example" exact>榜样标兵</el-menu-item>
                            <el-menu-item index="/party_building/pb/study" exact>二十大专题学习</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="/discipline_con">
                            <template #title>学科建设</template>
                            <el-menu-item index="/discipline_con/dc/1" exact>本科培养</el-menu-item>
                            <el-menu-item index="/discipline_con/dc/2" exact>专升本培养</el-menu-item>
                            <el-menu-item index="/discipline_con/dc/3" exact>实践教学</el-menu-item>
                            <el-menu-item index="/discipline_con/dc/4" exact>质量工程</el-menu-item>
                            <el-menu-item index="/discipline_con/dc/5" exact>教学成果</el-menu-item>
                        </el-sub-menu>

                        <el-menu-item index="6">教务管理</el-menu-item>
                        <el-menu-item index="7">规章制度</el-menu-item>
                        <el-menu-item index="8">学生工作</el-menu-item>
                        <el-menu-item index="9">国际交流</el-menu-item>
                        <el-menu-item index="10">办事指南</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        <!-- Main -->
        <el-main class="main-content">
        <!-- <el-main class="main-content"> -->
            <!-- 路由放置位置-->
            <router-view></router-view>
        </el-main>
        <!--Footer-->
        <el-footer class="footer">
            <el-row class="footer-row">
                <el-col :span="15">
                    <img src="../assets/logo.png" alt="Logo" class="header-image"/>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    地址：福州鼓楼区杨桥西路50号福州大学至诚学院
                </el-col>
                <el-col>
                    邮箱：123456@gmail.com
                </el-col>
                <el-col>
                    邮编：350002
                </el-col>
            </el-row>
        </el-footer>
    </div>
</template>

<style scoped lang="scss">
.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-y: auto;
}

.el-container {    
  height: 100%; /* 继承外部容器的高度 */    
  display: flex;    
  flex-direction: column;    
  /* 注意：如果el-container本身不应该有滚动条，则不需要添加overflow样式 */  
} 

.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: linear-gradient(to right, #2980B9, #0768B4);
    padding: 20px;
    height: 150px;
}

.el-header {
    --el-header-padding: 0px;
}

.header-line {
    height: 5px;
    background-color: #ffd04b;
}

.header-row {
    display: flex;
    align-items: center;
    padding: 10px 0;
    //margin: 10px;
}

.header-col {
    display: flex;
    align-items: center;
    justify-content: center;
}

.header-image {
    max-width: 100%;
    height: auto;
    max-height: 100px; /* 控制图片的最大高度 */
}

.header-search {
    width: 100%;
    max-width: 400px; /* 控制搜索框的最大宽度 */
    margin-left: auto;
}

.el-menu {
    height: 50px;

    .el-sub-menu {
        height: 50px;
    }

    .el-menu-item {
        height: 50px;
    }
}

.el-menu-demo {
    // background: linear-gradient(to right, #2980B9, #0768B4);
    align-items: center;
    justify-content: center;
    border-bottom: 0;
}

.carousel-container {
    text-align: center;
}

.carousel-item {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
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
    height: 150px;
    background: linear-gradient(to right, #2980B9, #0768B4);
}

.el-main {
    padding: 0px;
}

</style>
