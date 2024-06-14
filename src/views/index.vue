<script lang="ts" setup>
import {ref} from 'vue'
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
                            <el-menu-item index="/news/announcements" exact>通知公告</el-menu-item>
                            <el-menu-item index="/news/latestNews" exact>最新动态</el-menu-item>
                        </el-sub-menu>
                        <el-menu-item index="4">党建专栏</el-menu-item>
                        <el-menu-item index="5">学科建设</el-menu-item>
                        <el-menu-item index="6">教务管理</el-menu-item>
                        <el-menu-item index="7">规章制度</el-menu-item>
                        <el-menu-item index="8">学生工作</el-menu-item>
                        <el-menu-item index="9">国际交流</el-menu-item>
                        <el-menu-item index="10">办事指南</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>

        <!-- Main -->
        <el-main class="main-content">
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

.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: linear-gradient(to right, #2980B9, #0768B4);
    // padding: 20px;
    height: 170px;
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
    border-bottom: 0px;
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
    flex: 1;
    padding: 20px;
    background-color: #fff;
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
